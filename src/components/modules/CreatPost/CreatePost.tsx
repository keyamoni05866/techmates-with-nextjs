"use client";
import "react-quill/dist/quill.snow.css";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import dynamic from "next/dynamic";
import { toast } from "sonner";

import { SelectorIcon } from "../../icons";

import { useAppSelector } from "@/src/redux/hook";
import { currentUser } from "@/src/redux/features/auth/authSlice";
import { ImageUploadFunc } from "@/src/utils";
import { useCreatePostMutation } from "@/src/redux/Api/PostApi/postApi";

type closeModalType = {
  closeModal: () => void;
};

export type TPostData = {
  title: string;
  content: string;
  image?: string | null;
  category: string;
  isPremium?: boolean;
};

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const categories = [
  "Web",
  "Software Engineering",
  "AI",
  "Software & Networking",
];
const CreatePost: React.FC<closeModalType> = ({ closeModal }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<TPostData>();
  const [value, setValue] = useState("");
  const user = useAppSelector(currentUser);
  const [createPost] = useCreatePostMutation();

  const handlePost: SubmitHandler<TPostData> = async (data) => {
    // console.log(data, "quilt data=>", value);

    const author = user?._id;

    if (value === "") {
      toast.error("Please Write something In Content");
    }

    if (data.image && data.image.length > 0) {
      try {
        const file = data.image[0] as any;
        const imageUrl = await ImageUploadFunc(file);

        data.image = imageUrl;
      } catch (error: any) {
        toast.error(error.data.message, { duration: 1000 });

        return;
      }
    } else {
      data.image = null;
    }

    const postData = {
      title: data.title,
      content: value,
      category: data.category,
      image: data.image || null,
      isPremium: data.isPremium || false,
      author,
    };

    // console.log(postData);
    try {
      const res = await createPost(postData).unwrap();

      console.log(res);

      toast.success(res.message, { duration: 3000 });
      closeModal();
    } catch (err: any) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handlePost)}>
        <div className="grid grid-cols-1  gap-2  mt-3 mb-4   ">
          <div>
            <label
              className="block text-sm text-gray-500 font-medium leading-6 ms-1 "
              htmlFor="title"
            >
              Title:
            </label>
            <div className="mt-2 ">
              <Input
                isClearable
                {...register("title", { required: "Title is required" })}
                className="w-full  "
                placeholder="Title"
                type="text"
                variant="bordered"
              />
            </div>
            <div>
              {errors.title && (
                <p className="mt-2 text-sm text-red-600">title is required</p>
              )}
            </div>
          </div>
          <div>
            <label
              className="block text-sm text-gray-500 font-medium leading-6 ms-1 "
              htmlFor="category"
            >
              Category:
            </label>
            <div className="mt-2 ">
              <Select
                disableSelectorIconRotation
                aria-label="Select a category"
                className="w-full"
                selectorIcon={<SelectorIcon />}
                variant="bordered"
                {...register("category", { required: "category is required" })}
              >
                {categories.map((category) => (
                  <SelectItem key={category}>{category}</SelectItem>
                ))}
              </Select>
            </div>
            <div>
              {errors.category && (
                <p className="mt-2 text-sm text-red-600">
                  category is required
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              className="block text-sm text-gray-500 font-medium leading-6 ms-1 "
              htmlFor="description"
            >
              Describe Your Thought:
            </label>
            <div className="mt-2 ">
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
          </div>
          <div>
            <label
              className="block text-sm text-gray-500 font-medium leading-6 ms-1 "
              htmlFor="image"
            >
              Image:
            </label>
            <div className="mt-2 ">
              <Input
                {...register("image")}
                className="w-full  "
                type="file"
                variant="bordered"
              />
            </div>
          </div>
          <div className="flex items-center mt-3 ms-1">
            <input
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              type="checkbox"
              {...register("isPremium")}
            />
            <label className="ml-2 block text-sm " htmlFor="isPremium">
              Make Premium
            </label>
          </div>
          <div className="mt-5">
            <button className="custom-btn w-full">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
