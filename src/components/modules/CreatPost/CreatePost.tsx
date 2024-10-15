"use client";
import "react-quill/dist/quill.snow.css";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { SubmitHandler, useForm } from "react-hook-form";
import { SelectorIcon } from "../../icons";
import ReactQuill from "react-quill";
import { useState } from "react";
import { useAppSelector } from "@/src/redux/hook";
import { currentUser } from "@/src/redux/features/auth/authSlice";
import { ImageUploadFunc } from "@/src/utils/ImageUpload";

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

export const categories = ["Vegetables", "Flowers", "Landscaping"];
const CreatePost: React.FC<closeModalType> = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TPostData>();
  const [value, setValue] = useState("");
  const user = useAppSelector(currentUser);

  const handlePost: SubmitHandler<TPostData> = async (data) => {
    // console.log(data, "quilt data=>", value);
    const author = user?._id;
    if (data.image && data.image.length > 0) {
      try {
        const file = data.image[0] as any;
        const imageUrl = await ImageUploadFunc(file);
        data.image = imageUrl;
      } catch (error: any) {
        // toast.error(error.data.message, { duration: 1000 });
        return;
      }
    } else {
      data.image = null;
    }

    const postData = {
      content: value,
      category: data.category,
      image: data.image || null,
      isPremium: data.isPremium || false,
      author,
    };
    console.log(postData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handlePost)}>
        <div className="grid grid-cols-1  gap-2  mt-3 mb-4   ">
          <div>
            <label className="block text-sm text-gray-500 font-medium leading-6 ms-1 ">
              Title:
            </label>
            <div className="mt-2 ">
              <Input
                isClearable
                {...register("title", { required: "Title is required" })}
                type="text"
                variant="bordered"
                placeholder="Title"
                className="w-full  "
              />
            </div>
            <div>
              {errors.title && (
                <p className="mt-2 text-sm text-red-600">title is required</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-500 font-medium leading-6 ms-1 ">
              Category:
            </label>
            <div className="mt-2 ">
              <Select
                aria-label="Select a category"
                className="w-full"
                variant="bordered"
                disableSelectorIconRotation
                selectorIcon={<SelectorIcon />}
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
            <label className="block text-sm text-gray-500 font-medium leading-6 ms-1 ">
              Describe Your Thought:
            </label>
            <div className="mt-2 ">
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-500 font-medium leading-6 ms-1 ">
              Image:
            </label>
            <div className="mt-2 ">
              <Input
                {...register("image")}
                type="file"
                variant="bordered"
                className="w-full  "
              />
            </div>
          </div>
          <div className="flex items-center mt-3 ms-1">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              {...register("isPremium")}
            />
            <label className="ml-2 block text-sm ">Make Premium</label>
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
