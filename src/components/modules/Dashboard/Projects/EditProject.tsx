"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import { FiUpload, FiTrash } from "react-icons/fi";
import { useRouter } from "next/navigation";
import TextEditor from "@/components/TextEditor";

const projectSchema = z.object({
  title: z.string().min(3, "Title is required"),
  slug: z.string().min(3, "Slug is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  content: z.string().optional(),
  features: z.array(z.string()).optional(),
  technologies: z.array(z.string()).optional(),
  liveUrl: z.string().url().optional().or(z.literal("")),
  repoUrl: z.string().url().optional().or(z.literal("")),
  images: z.any().optional(),
});

type ProjectFormData = z.infer<typeof projectSchema>;

export default function EditProject() {
  const [formData, setFormData] = useState({ content: "" });
  const [features, setFeatures] = useState<string[]>([]);
  const [featureInput, setFeatureInput] = useState("");
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [techInput, setTechInput] = useState("");
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
  });

  // ➕ Add Feature
  const handleAddFeature = () => {
    const f = featureInput.trim();
    if (f && !features.includes(f)) {
      setFeatures([...features, f]);
      setFeatureInput("");
    }
  };

  // ➕ Add Technology
  const handleAddTech = () => {
    const t = techInput.trim();
    if (t && !technologies.includes(t)) {
      setTechnologies([...technologies, t]);
      setTechInput("");
    }
  };

  // 🖼️ Multiple Images Upload
  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length > 0) {
      const previews = files.map((file) => URL.createObjectURL(file));
      setImagePreviews(previews);
      setImageFiles(files);
      setValue("images", files);
    }
  };

  // ❌ Remove Image Preview
  const removeImage = (index: number) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: ProjectFormData) => {
    try {
      const sendData = new FormData();
      sendData.append("title", data.title);
      sendData.append("slug", data.slug);
      sendData.append("description", data.description);
      sendData.append("content", formData.content || "");
      sendData.append("features", JSON.stringify(features));
      sendData.append("technologies", JSON.stringify(technologies));
      sendData.append("views", "0");
      sendData.append("authorId", String(1));

      if (data.liveUrl) sendData.append("liveUrl", data.liveUrl);
      if (data.repoUrl) sendData.append("repoUrl", data.repoUrl);

      imageFiles.forEach((file) => {
        sendData.append("files", file);
      });

      const token = localStorage.getItem("token");

      await axios.post(`${process.env.NEXT_PUBLIC_BASE_API}/project/create`, sendData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
        },
      });

      toast.success("✅ Project created successfully!");
      router.push("/dashboard/manage-project");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to create project");
    }
  };

  return (
    <div className="w-full bg-white p-6 md:p-8 shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Create New Project</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title & Slug */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              {...register("title")}
              placeholder="Project title"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>
          <div>
            <label className="block font-medium mb-1">Slug</label>
            <input
              {...register("slug")}
              placeholder="Unique slug"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
            />
            {errors.slug && <p className="text-red-500 text-sm">{errors.slug.message}</p>}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Short Description</label>
          <textarea
            {...register("description")}
            rows={2}
            placeholder="Brief summary of the project..."
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Text Editor for content */}
        <div>
          <label className="block font-medium mb-1">Detailed Content</label>
          <TextEditor formData={formData} setFormData={setFormData} />
        </div>

        {/* Features */}
        <div>
          <label className="block font-medium mb-1">Features</label>
          <div className="flex gap-2 mb-2">
            <input
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              placeholder="Add a feature"
              className="flex-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <button
              type="button"
              onClick={handleAddFeature}
              className="bg-orange-600 text-white px-4 rounded-lg hover:bg-orange-700 transition"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {features.map((f, i) => (
              <span key={i} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div>
          <label className="block font-medium mb-1">Technologies</label>
          <div className="flex gap-2 mb-2">
            <input
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              placeholder="Add a technology"
              className="flex-1 border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <button
              type="button"
              onClick={handleAddTech}
              className="bg-orange-600 text-white px-4 rounded-lg hover:bg-orange-700 transition"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((t, i) => (
              <span key={i} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* URLs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">Live URL</label>
            <input
              {...register("liveUrl")}
              placeholder="https://example.com"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Repo URL</label>
            <input
              {...register("repoUrl")}
              placeholder="https://github.com/..."
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
        </div>

        {/* Multiple Images */}
        <div>
          <label className="block font-medium mb-1">Project Images</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer border rounded-lg px-4 py-2 hover:bg-gray-100 transition">
              <FiUpload size={18} />
              <span>Upload Images</span>
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImagesChange}
              />
            </label>
          </div>

          {imagePreviews.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 mt-3">
              {imagePreviews.map((src, i) => (
                <div key={i} className="relative">
                  <Image
                    src={src}
                    width={100}
                    height={100}
                    alt={`image-${i}`}
                    className="object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute top-1 right-1 bg-white/80 p-1 rounded-full hover:bg-red-200"
                  >
                    <FiTrash size={14} className="text-red-600" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit */}
        <button
          disabled={isSubmitting}
          type="submit"
          className="px-6 py-2.5 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Create Project"}
        </button>
      </form>
    </div>
  );
}
