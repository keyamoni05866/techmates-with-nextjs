"use client";

import { Spinner } from "@nextui-org/spinner";
import { useState } from "react";
import { Input } from "@nextui-org/input";

import CardUI from "../../UI/CardUI";
import { SearchIcon } from "../../icons";

import { TPost } from "@/src/types";
import { useGetAllPostsQuery } from "@/src/redux/Api/PostApi/postApi";

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
    <div className="my-8  lg:mx-auto mx-2 w-full">
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
        {/* <div className="">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div> */}
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
