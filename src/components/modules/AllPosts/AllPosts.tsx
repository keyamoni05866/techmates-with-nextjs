"use client";

import { Spinner } from "@nextui-org/spinner";
import { useState } from "react";

import CardUI from "../../UI/CardUI";

import { TPost } from "@/src/types";
import { useGetAllPostsQuery } from "@/src/redux/Api/PostApi/postApi";
import PostModal from "../../UI/PostModal/postModal";

export const categories = [
  "Web",
  "Software Engineering",
  "AI",
  "Software & Networking",
];
const AllPosts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { data: AllPosts, isLoading } = useGetAllPostsQuery({
    searchQuery,
    selectedCategory,
  });

  //   console.log(AllPosts);
  return (
    // <div>
    <div className="   lg:mx-auto lg:px-0 px-4 w-full">
      {/* <div className="mb-10 border p-4 rounded-md">
        <h4 className="text-md font-semibold mb-3">Create New Post</h4>
        <PostModal />
        <div className="mt-3 flex  gap-20 items-center">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 primary-color"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>

            <h4 className="font-light">Post</h4>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 primary-color"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <h4 className="font-light">Photo/Video</h4>
          </div>

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 primary-color"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>

            <h4 className="font-light">Live Stream</h4>
          </div>
        </div>
      </div> */}

      <div className="lg:me-2  ">
        <PostModal />
      </div>

      <div className=" hidden lg:block mb-10">
        <div className="lg:flex gap-2 grid grid-cols-3 my-2 lg:my-0   ">
          {selectedCategory && (
            <button
              className="lg:px-4 lg:py-2 py-1 rounded-xl bg-[#9753d3] text-white text-sm"
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
          )}
          {categories.map((category) => (
            <button
              key={category}
              className={`lg:px-4 lg:py-2 text-sm rounded-xl ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() =>
                setSelectedCategory(
                  category === selectedCategory ? "All" : category
                )
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Spinner color="secondary" />
        </div>
      ) : AllPosts?.data && AllPosts?.data?.length > 0 ? (
        AllPosts?.data?.map((post: TPost) => (
          <CardUI key={post._id} post={post} />
        ))
      ) : (
        <>
          <h4 className="text-xl text-center font-semibold">
            No Post Found!!!
          </h4>
        </>
      )}
    </div>
    // {/* </div> */}
  );
};

export default AllPosts;
