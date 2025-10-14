"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextEditor from "@/components/TextEditor";
import axios from "axios";
import toast from "react-hot-toast";
import { FiUpload } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/navigation";

const blogSchema = z.object({
  title: z.string().min(3, "Title is required"),
  slug: z.string().min(3, "Slug is required"),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
  tags: z.array(z.string()).optional(),
  file: z.any().optional(),
  isFeatured: z.string().optional(),
  published: z.string().optional(),
});

type BlogFormData = z.infer<typeof blogSchema>;

export default function CreateBlogForm() {
  const [formData, setFormData] = useState({ content: "" });
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm<BlogFormData>({
    resolver: zodResolver(blogSchema),
  });
const navigate = useRouter();
  const handleAddTag = () => {
    const t = tagInput.trim();
    if (t && !tags.includes(t)) {
      setTags([...tags, t]);
      setTagInput("");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFilePreview(URL.createObjectURL(file));
      setValue("file", e.target.files);
    }
  };

  const onSubmit = async (data: BlogFormData) => {
    try {
      const sendData = new FormData();
      sendData.append("title", data.title);
      sendData.append("slug", data.slug);
      sendData.append("excerpt", data.excerpt);
      sendData.append("content", formData.content);
      sendData.append("tags", JSON.stringify(tags));
      sendData.append("isFeatured", data.isFeatured || "false");
      sendData.append("published", data.published || "true");
      sendData.append("views", "0");
      sendData.append("authorId", String(1)); // Replace with real userId

      if (data.file && data.file[0]) sendData.append("file", data.file[0]);

      const token = localStorage.getItem("token");
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_API}/post/create`, sendData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      });

      toast.success("Blog created successfully!");
      navigate.push("/dashboard/manage-blog");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to create blog");
    }
  };

  return (
    <div className="w-full bg-white p-5 md:p-6 shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Create a New Blog</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title & Slug */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              {...register("title")}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter blog title..."
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>
          <div>
            <label className="block font-medium mb-1">Slug</label>
            <input
              {...register("slug")}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter slug..."
            />
            {errors.slug && <p className="text-red-500 text-sm mt-1">{errors.slug.message}</p>}
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block font-medium mb-1">Excerpt</label>
          <textarea
            {...register("excerpt")}
            rows={2}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Short description..."
          />
          {errors.excerpt && <p className="text-red-500 text-sm mt-1">{errors.excerpt.message}</p>}
        </div>

        {/* Text Editor */}
        <TextEditor formData={formData} setFormData={setFormData} />

        {/* Tags */}
        <div>
          <label className="block font-medium mb-1">Tags</label>
          <div className="flex gap-2 mb-2">
            <input
              value={tagInput}
              onChange={e => setTagInput(e.target.value)}
              className="flex-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter a tag"
            />
            <button type="button" onClick={handleAddTag} className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700 transition">
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">{tag}</span>
            ))}
          </div>
        </div>

        {/* File Upload */}
        <div>
          <label className="block font-medium mb-1">Thumbnail</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer border rounded-lg px-4 py-2 hover:bg-gray-100 transition">
              <FiUpload size={18} />
              <span>Upload Image</span>
              <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </label>
            {filePreview && (
              <Image src={filePreview} width={80} height={80} alt="Preview" className="object-cover rounded-md" />
            )}
          </div>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">Featured</label>
            <select {...register("isFeatured")} className="w-full border rounded-lg px-3 py-2">
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Published</label>
            <select {...register("published")} className="w-full border rounded-lg px-3 py-2">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <button
          disabled={isSubmitting}
          type="submit"
          className="px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Publish Blog"}
        </button>
      </form>
    </div>
  );
}
