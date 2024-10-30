"use client";
import { TPost } from "@/src/types";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Select, SelectItem } from "@nextui-org/select";
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { SelectorIcon } from "../../icons";
// import ReactQuill from "react-quill";
import { useState } from "react";
import dynamic from "next/dynamic";
import { ImageUploadFunc } from "@/src/utils";
import { toast } from "sonner";
import { useUpdatePostMutation } from "@/src/redux/Api/PostApi/postApi";

export type TUpdatePostData = {
  title?: string;
  content?: string;
  image?: string | null;
  category?: string;
  isPremium?: boolean;
};
export const categories = [
  "Web",
  "Software Engineering",
  "AI",
  "Software & Networking",
];
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const PostUpdateModal = ({ post }: { post: TPost }) => {
  const { _id: postId, title, image, content, category, isPremium } = post;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm<TUpdatePostData>();
  const [value, setValue] = useState(content);
  const [updatePost] = useUpdatePostMutation();

  const handleUpdatePost: SubmitHandler<TUpdatePostData> = async (data) => {
    const toastId = toast.loading("Updating");
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
      data.image = image;
    }

    const UpdatePostData = {
      _id: postId,
      content: value || content,
      ...data,
    };

    try {
      const res = await updatePost(UpdatePostData).unwrap();

      toast.success(`${res.message}`, { id: toastId, duration: 1000 });
    } catch (error: any) {
      toast.error(error.data.message, { id: toastId, duration: 1000 });
    }
  };

  return (
    <div>
      <button onClick={onOpen}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="my-3">
                <form onSubmit={handleSubmit(handleUpdatePost)}>
                  <h4 className="text-center text-xl font-bold">
                    Update Your Post
                  </h4>
                  <div className="grid lg:grid-cols-2 grid-cols-1  gap-2 mt-3   ">
                    <div>
                      <label className="block text-sm text-gray-500 font-medium leading-6 ms-1 ">
                        Title:
                      </label>
                      <div className="mt-2 ">
                        <Input
                          {...register("title")}
                          type="text"
                          variant="bordered"
                          defaultValue={title}
                          className="w-full  "
                        />
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
                  </div>
                  <div className="mt-3">
                    <label className="block text-sm text-gray-500 font-medium leading-6 ms-1 ">
                      Category:
                    </label>
                    <div className="mt-2 ">
                      <select
                        defaultValue={category}
                        className=" block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                        {...register("category")}
                      >
                        {categories.map((category) => (
                          <option key={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-3">
                    <label className="block text-sm text-gray-500 font-medium leading-6 ms-1 ">
                      Describe Your Thought:
                    </label>
                    <div className="mt-2 ">
                      <ReactQuill
                        // defaultValue={post?.content}
                        value={value}
                        onChange={setValue}
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
                    <button type="submit" className="custom-btn w-full">
                      Post
                    </button>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PostUpdateModal;
