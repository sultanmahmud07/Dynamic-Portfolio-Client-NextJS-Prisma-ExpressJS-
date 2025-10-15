import React from 'react';
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
interface TextEditorProps {
  formData: {
    content: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{ content: string }>>;
}



const TextEditor = ({ formData, setFormData }: TextEditorProps) => {
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ["small", false, "large", "huge"] }], // Font size dropdown
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "bullet",
    "link",
    "image",
  ];

  const handleContentChange = (value:string) => {
    setFormData({ ...formData, content: value });
  };

  return (
    <div className="my-5">
      <label className="block font-semibold text-[#191C1F] my-2">Blog Content</label>
      <ReactQuill
        value={formData.content}
        onChange={handleContentChange}
        modules={quillModules}
        formats={quillFormats}
        className="bg-white rounded"
      />
    </div>
  );
};

export default TextEditor;
