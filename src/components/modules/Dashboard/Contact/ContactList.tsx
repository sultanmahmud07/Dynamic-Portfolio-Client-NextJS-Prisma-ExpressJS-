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
import { IContact } from "@/types";
import axios from "axios";
import Loader from "@/components/shared/Spinner";


export default function AllContactList() {
      const [currentPage, setCurrentPage] = useState(1);
      const [limit] = useState(10);
      const [searchTerm, setSearchTerm] = useState("")
      const [sortOrder, setSortOrder] = useState("")
      const [contact, setContact] = useState<IContact[]>([]);
      const [isLoading, setIsLoading] = useState(false);
      const [totalPage, setTotalPage] = useState(1);

      const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value)
      }
      // Fetch blogs
      const fetchContactData = async () => {
            setIsLoading(true);
            try {
                  const res = await axios.get(
                        `${process.env.NEXT_PUBLIC_BASE_API}/contact/all-contact?page=${currentPage}&limit=${limit}&search=${searchTerm}`,
                        { withCredentials: true }
                  );
                  console.log(res.data)
                  setContact(res.data.data || []);
                  setTotalPage(res.data.meta?.totalPage || 1);
            } catch (error) {
                  console.error(error);
                  toast.error("Failed to fetch blogs");
            } finally {
                  setIsLoading(false);
            }
      };

      useEffect(() => {
            fetchContactData();
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currentPage, sortOrder, searchTerm]);
      const handleSortChange = (value: string) => {
            setSortOrder(value)
      }

      const handleRemoveUser = async (contactId: number) => {
            const toastId = toast.loading("Removing...");
            const token = localStorage.getItem("token");
            try {
                  const res = await axios.delete(
                        `${process.env.NEXT_PUBLIC_BASE_API}/contact/${contactId}`,
                        {
                              withCredentials: true,
                              headers: {
                                    Authorization: `${token}`, // ✅ attach token
                              },
                        }
                  );
                  console.log(res)
                  toast.dismiss(toastId);
                  toast.success("Contact deleted successfully!");
                  fetchContactData();
            } catch (err) {
                  toast.dismiss(toastId);
                  console.error(err);
                  toast.error("Failed to delete contact");
            }
      };


      return (
            <div className="w-full ">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-4">
                        <h1 className="text-2xl font-bold">Manage User</h1>
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
                              <TableRow>
                                    <TableHead className="">Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Phone</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead className="">Message</TableHead>
                                    <TableHead className="text-center">Action</TableHead>
                              </TableRow>
                        </TableHeader>
                        {
                              isLoading ?
                                    <Loader></Loader>
                                    :
                                    <TableBody>
                                          {contact?.map((user: IContact) => (
                                                <TableRow key={user.id}>
                                                      <TableCell className="font-bold uppercase">{user.name}</TableCell>
                                                      <TableCell className="font-medium">{user.email}</TableCell>
                                                      <TableCell>{user.phone}</TableCell>
                                                      <TableCell className="">{formatDate(user.createdAt)}</TableCell>
                                                      <TableCell>{user.message}</TableCell>
                                                      <TableCell className="flex items-center justify-end gap-2">
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
