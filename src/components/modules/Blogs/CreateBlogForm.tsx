"use client";

import { useState } from "react";
import { createBlog } from "@/actions/create";
import Form from "next/form";

export default function CreateBlogForm() {
  const [isFeatured, setIsFeatured] = useState("false");
  const [published, setPublished] = useState("true");

  return (
    <Form
      action={createBlog}
      className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-2xl space-y-6 border border-gray-100 mt-10"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        📝 Create New Blog
      </h2>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Building Scalable Web Apps..."
          className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Slug */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="slug">
          Slug
        </label>
        <input
          type="text"
          id="slug"
          name="slug"
          placeholder="building-scalable-apps-with-mern"
          className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Excerpt */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="excerpt">
          Excerpt
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          rows={2}
          placeholder="Short summary of the post..."
          className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Content */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="content">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          rows={6}
          placeholder="Write your full blog content here..."
          className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Tags */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="tags">
          Tags (comma separated)
        </label>
        <input
          type="text"
          id="tags"
          name="tags"
          placeholder="MERN, FullStack, Node.js, React"
          className="w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Thumbnail */}
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor="file">
          Upload Thumbnail
        </label>
        <input
          type="file"
          id="file"
          name="file"
          accept="image/*"
          className="w-full text-sm text-gray-700 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
        />
      </div>

      {/* Featured & Published */}
      <div className="grid grid-cols-2 gap-6">
        {/* Featured */}
        <div>
          <p className="block text-sm font-medium mb-1">Featured</p>
          <div className="flex gap-4">
            {["true", "false"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isFeatured"
                  value={val}
                  checked={isFeatured === val}
                  onChange={(e) => setIsFeatured(e.target.value)}
                />
                {val === "true" ? "Yes" : "No"}
              </label>
            ))}
          </div>
        </div>

        {/* Published */}
        <div>
          <p className="block text-sm font-medium mb-1">Published</p>
          <div className="flex gap-4">
            {["true", "false"].map((val) => (
              <label key={val} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="published"
                  value={val}
                  checked={published === val}
                  onChange={(e) => setPublished(e.target.value)}
                />
                {val === "true" ? "Yes" : "No"}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Hidden defaults */}
      <input type="hidden" name="views" value="0" />
      <input type="hidden" name="authorId" value="1" />

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition"
      >
        🚀 Publish Blog
      </button>
    </Form>
  );
}
