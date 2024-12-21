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
      <div className="lg:me-2  ">
        <PostModal />
      </div>

      <div className=" hidden lg:block mb-10">
        <div className="lg:flex gap-2 grid grid-cols-3 my-2 lg:my-0   ">
          {selectedCategory && (
            <button
              className="lg:px-4 lg:py-2 py-1 rounded-xl bg-[#14746f] text-white text-sm"
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
