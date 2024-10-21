"use client";

import { TPost } from "@/src/types";
import React from "react";
import CardFooter from "../../UI/CardFooter";

const PostDetailsSidebar = ({ post }: { post: TPost }) => {
  return (
    <div className="flex lg:gap-10 gap-3 mb-3 lg:mb-0">
      <CardFooter post={post} />
      <div className="flex items-center">
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
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>

        <p className=" text-lg font-semibold ms-1 mt-1">PDF</p>
      </div>
    </div>
  );
};

export default PostDetailsSidebar;
