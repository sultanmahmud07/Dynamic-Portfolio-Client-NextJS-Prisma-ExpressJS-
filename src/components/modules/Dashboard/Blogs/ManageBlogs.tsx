"use client";

import { DeleteConfirmation } from "@/components/DeleteConfirmation";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { EyeIcon, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { IApiError, IBlog } from "@/types";
import { Switch } from "@/components/ui/switch";
import Loader from "@/components/shared/Spinner";
import { formatDate } from "@/utils/getDateFormater";
import Link from "next/link";
import axios from "axios";

export default function ManageBlogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);

  // Fetch blogs
  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API}/post?page=${currentPage}&limit=10&search=${searchTerm}&sort=${sortOrder}`,
        { withCredentials: true }
      );
      console.log(res.data.data)
      setBlogs(res.data.data.data || []);
      setTotalPage(res.data.data.pagination?.totalPage || 1);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch blogs");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, sortOrder, searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (value: string) => {
    setSortOrder(value);
  };

  // Handle Delete
  const handleRemoveBlog = async (blogId: number) => {
    const toastId = toast.loading("Deleting...");
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`,
        { withCredentials: true }
      );
      console.log(res)
      toast.dismiss(toastId);
      toast.success("Blog deleted successfully!");
      fetchBlogs();
    } catch (err) {
      toast.dismiss(toastId);
      console.error(err);
      toast.error("Failed to delete blog");
    }
  };

  // Handle Toggle (e.g., feature or block)
const handleUpdateBlog = async (blog: IBlog) => {
  const toastId = toast.loading("Updating...");
  try {
    const token = localStorage.getItem("token"); // ✅ get token from localStorage

    const res = await axios.patch(
      `${process.env.NEXT_PUBLIC_BASE_API}/post/update/${blog.id}`,
      { isFeatured: !blog.isFeatured },
      {
        withCredentials: true,
        headers: {
          Authorization: `${token}`, // ✅ attach token
          // or "Bearer " + token if your backend expects Bearer tokens
          // Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(res.data);
    toast.dismiss(toastId);
    toast.success("Blog updated successfully!");
    fetchBlogs();
  } catch (err) {
    console.error(err);
    const error = err as IApiError;
    toast.error(error?.data?.message || "Update failed");
    toast.dismiss(toastId);
  }
};


  return (
    <div className="w-full ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-4">
        <h1 className="text-2xl font-bold">All Blogs</h1>
        <Input
          className="w-full md:w-sm"
          type="text"
          placeholder="Search here.."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Select onValueChange={handleSortChange} value={sortOrder}>
          <SelectTrigger className="md:w-[180px]">
            <SelectValue placeholder="Select a list order" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Order By</SelectLabel>
              <SelectItem value="asc">Ascending</SelectItem>
              <SelectItem value="desc">Descending</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-secondary">
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Featured</TableHead>
            <TableHead>Views</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>

        {isLoading ? (
          <Loader />
        ) : (
          <TableBody>
            {blogs?.length ? (
              blogs.map((blog: IBlog) => (
                <TableRow key={blog.id} className="bg-white shadow">
                  <TableCell className="font-medium">{blog.title}</TableCell>
                  <TableCell>{blog.author?.name || "N/A"}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Switch
                        id={`blog-${blog.id}`}
                        checked={blog.isFeatured}
                        onClick={() => handleUpdateBlog(blog)}
                      />
                      <Label htmlFor={`blog-${blog.id}`}>Featured</Label>
                    </div>
                  </TableCell>
                  <TableCell>{blog.views}</TableCell>
                  <TableCell>{formatDate(blog.createdAt)}</TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Link
                      className="w-full cursor-pointer"
                      href={`/blogs/${blog.slug}`} 
                    >
                      <Button size="sm">
                        <EyeIcon />
                      </Button>
                    </Link>
                    <DeleteConfirmation
                      onConfirm={() => handleRemoveBlog(blog.id)}
                    >
                      <Button size="sm">
                        <Trash2 />
                      </Button>
                    </DeleteConfirmation>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  No blogs found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        )}
      </Table>

      {totalPage > 1 && (
        <div className="flex justify-end mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
              {Array.from({ length: totalPage }, (_, index) => index + 1).map(
                (page) => (
                  <PaginationItem
                    key={page}
                    onClick={() => setCurrentPage(page)}
                  >
                    <PaginationLink
                      className="cursor-pointer"
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className={
                    currentPage === totalPage
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
