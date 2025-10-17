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
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { formatDate } from "@/utils/getDateFormater";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from "axios";
import Loader from "@/components/shared/Spinner";
import { IUser } from "@/types";


export default function AllAdminList() {
      const [currentPage, setCurrentPage] = useState(1);
      const [limit] = useState(10);
      const [searchTerm, setSearchTerm] = useState("")
      const [sortOrder, setSortOrder] = useState("")
      const [allAdmins, setAllAdmins] = useState<IUser[]>([]);
      const [isLoading, setIsLoading] = useState(false);
      const [totalPage, setTotalPage] = useState(1);
      const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value)
      }

      const handleSortChange = (value: string) => {
            setSortOrder(value)
      }
      const handleRemoveUser = async (userId: string) => {
            const toastId = toast.loading("Removing...");
            const token = localStorage.getItem("token");
            try {
                  const res = await axios.delete(
                        `${process.env.NEXT_PUBLIC_BASE_API}/post/delete/${userId}`,
                        {
                              withCredentials: true,
                              headers: {
                                    Authorization: `${token}`, // ✅ attach token
                              },
                        }
                  );
                  console.log(res)
                  toast.dismiss(toastId);
                  toast.success("Blog deleted successfully!");
            } catch (err) {
                  toast.dismiss(toastId);
                  console.error(err);
                  toast.error("Failed to delete blog");
            }
      };
      const fetchBlogs = async () => {
            setIsLoading(true);
            try {
                  const res = await axios.get(
                        `${process.env.NEXT_PUBLIC_BASE_API}/user?page=${currentPage}&limit=${limit}&search=${searchTerm}&sort=${sortOrder}`,
                        { withCredentials: true }
                  );
                  console.log(res.data)
                  setAllAdmins(res.data.data || []);
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




      return (
            <div className="w-full ">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-4">
                        <h1 className="text-2xl font-bold">Manage Admin</h1>
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
                                          <SelectItem value="createdAt">Ascending</SelectItem>
                                          <SelectItem value="-createdAt">Descending</SelectItem>
                                    </SelectGroup>
                              </SelectContent>
                        </Select>
                  </div>
                  <Table>
                        <TableHeader>
                              <TableRow className="bg-secondary">
                                    <TableHead className="">Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead className="">Status</TableHead>
                                    <TableHead className="text-center">Action</TableHead>
                              </TableRow>
                        </TableHeader>
                        {
                              isLoading ?
                                    <Loader></Loader>
                                    :
                                    <TableBody>
                                          {allAdmins?.map((user: IUser) => (
                                                <TableRow className="bg-white" key={user.id}>
                                                      <TableCell className="font-bold uppercase">{user.name}</TableCell>
                                                      <TableCell className="font-medium">{user.email}</TableCell>
                                                      <TableCell>{user.role}</TableCell>
                                                      <TableCell className="">{formatDate(user.createdAt)}</TableCell>
                                                      <TableCell className="text-green-500">Active</TableCell>
                                                      <TableCell className="flex items-center justify-center gap-2">
                                                            <DeleteConfirmation
                                                                  onConfirm={() => handleRemoveUser(user.id)}
                                                            >
                                                                  <Button size="sm">
                                                                        <Trash2 />
                                                                  </Button>
                                                            </DeleteConfirmation>
                                                      </TableCell>
                                                </TableRow>
                                          ))}
                                    </TableBody>
                        }
                  </Table>
                  {totalPage > 1 && (
                        <div className="flex justify-end mt-4">
                              <div>
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
                                                                  <PaginationLink className="cursor-pointer" isActive={currentPage === page}>
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
                        </div>
                  )}
            </div>
      );
}
