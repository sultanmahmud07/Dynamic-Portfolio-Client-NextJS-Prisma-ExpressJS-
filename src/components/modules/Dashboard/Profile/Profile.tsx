"use client"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formatDate } from "@/utils/getDateFormater";
import { IApiError, IUser } from "@/types";
import Loader from "@/components/shared/Spinner";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

// ---- Zod schema for password change ----
const passwordSchema = z
  .object({
    oldPassword: z.string().min(6, "Old password is required"),
    newPassword: z.string().min(6, "New password must be at least 6 chars"),
    confirmPassword: z.string().min(6, "Confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type PasswordFormValues = z.infer<typeof passwordSchema>;

const Profile = () => {
  const [profile, setProfile] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: PasswordFormValues) => {
    const newData = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword
    }
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API}/auth/change-password`,
        newData,
        { withCredentials: true }
      );
      console.log(res.data)
      toast.success("Password changed successfully");
    } catch (err) {
      console.error(err);
      const error = err as IApiError;
      toast.error(`${error.data.message}`);
    }
  };
  // Fetch blogs
  const fetchBlogs = async () => {
    setIsLoading(true);
    const userId = localStorage.getItem("user_id");
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_API}/user/${userId}`,
        { withCredentials: true }
      );
      // console.log(res.data.data)
      setProfile(res.data.data || null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch blogs");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (isLoading) {
    return (<Loader></Loader>)
  }
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 p-4">
      <Card className="shadow-md h-full mb-5">
        <CardHeader>
          <CardTitle className="text-xl font-bold">My Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm">
            <p>
              <strong>Name:</strong> {profile?.name}
            </p>
            <p>
              <strong>Email:</strong> {profile?.email}
            </p>
            <p>
              <strong>Role:</strong> {profile?.role}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`${profile?.isActive === "ACTIVE"
                  ? "text-green-600"
                  : "text-green-600"
                  }`}
              >
                Active
              </span>
            </p>
            <p>
              <strong>Verified:</strong>{" "}
              {profile?.isVerified ? "✅ Yes" : "❌ No"}
            </p>
            <p>
              <strong>Created At:</strong>{" "}
              {formatDate(profile?.createdAt)}
            </p>
            <p>
              <strong>Last Updated:</strong>{" "}
              {formatDate(profile?.updatedAt)}
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="shadow-md h-full">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Change Password</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              {/* Old Password */}
              <FormField
                control={form.control}
                name="oldPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Old Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter old password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* New Password */}
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter new password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Confirm new password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3">
                <Button type="submit" className="w-full md:w-auto">
                  Save Password
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
