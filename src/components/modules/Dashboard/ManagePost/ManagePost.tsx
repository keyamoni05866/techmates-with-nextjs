"use client";

import { Avatar } from "@nextui-org/avatar";
import { Spinner } from "@nextui-org/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { toast } from "sonner";
import swal from "sweetalert";

import { TPost } from "@/src/types";
import {
  useDeletePostByAdminMutation,
  useGetAllPostsQuery,
} from "@/src/redux/Api/PostApi/postApi";
const ManagePost = () => {
  const { data: AllPosts, isLoading } = useGetAllPostsQuery({});
  const [deletePost] = useDeletePostByAdminMutation();
  // post delete operations
  const handleDelete = (id: string) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, You will not be able to recover this",
      icon: "warning",
      buttons: [true, "OK"],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const res = await deletePost(id);

        toast.success(res.data?.message);
      }
    });
  };

  return (
    <Table
      isStriped
      aria-label="Example static collection table"
      className="lg:p-12 p-3"
    >
      <TableHeader>
        <TableColumn>Image</TableColumn>
        <TableColumn>Post Name</TableColumn>
        <TableColumn>Category</TableColumn>
        <TableColumn>Author Name</TableColumn>

        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        loadingContent={<Spinner color="secondary" />}
      >
        {AllPosts?.data?.map((post: TPost) => (
          <TableRow key={post._id}>
            <TableCell>
              <Avatar alt="User Picture" className="me-2" src={post?.image} />
            </TableCell>
            <TableCell>{post.title}</TableCell>
            <TableCell>{post.category}</TableCell>
            <TableCell>{post?.author?.name}</TableCell>

            <TableCell>
              <div className="flex items-center gap-5">
                <button
                  className="text-red-500"
                  onClick={() => handleDelete(post?._id)}
                >
                  <svg
                    className="size-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ManagePost;
