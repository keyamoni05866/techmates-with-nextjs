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

import { TUser } from "@/src/types";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
  useUpdateUserMutation,
} from "@/src/redux/Api/UserApi/userApi";
const ManageUser = () => {
  const { data: AllUsers, isLoading } = useGetUsersQuery({});
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const handleActivate = async (id: string) => {
    const data = {
      _id: id,
      status: "active",
    };

    updateUser(data);
  };
  const handleBlock = async (id: string) => {
    const data = {
      _id: id,
      status: "blocked",
    };

    updateUser(data);
  };

  const handleDelete = (id: string) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, You will not be able to recover this",
      icon: "warning",
      buttons: [true, "OK"],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const res = await deleteUser(id);

        toast.success(res.data?.message);
      }
    });
  };

  return (
    <Table
      isStriped
      aria-label="Example static collection table"
      className="p-12"
    >
      <TableHeader>
        <TableColumn>Image</TableColumn>
        <TableColumn>NAME</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>Verified</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        loadingContent={<Spinner color="secondary" />}
      >
        {AllUsers?.data?.map((user: TUser) => (
          <TableRow key={user._id}>
            <TableCell>
              <Avatar
                alt="User Picture"
                className="me-2"
                src={user?.profilePicture}
              />
            </TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              {user.verified === true ? (
                <span className="text-md font-bold uppercase">Yes</span>
              ) : (
                <span className="text-md font-bold uppercase">No</span>
              )}
            </TableCell>
            <TableCell>
              {user.status === "active" ? (
                <span className="bg-green-400 px-3 pt-1 pb-2 text-md text-white rounded-2xl  ">
                  {user.status}
                </span>
              ) : (
                <span className="bg-red-400 px-3 pt-1 pb-2 text-md text-white rounded-2xl  ">
                  {user.status}
                </span>
              )}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-5">
                <div>
                  {user.status === "active" ? (
                    <button
                      className="custom-outline-btn"
                      onClick={() => handleBlock(user._id)}
                    >
                      Block
                    </button>
                  ) : (
                    <button
                      className="bg-green-500 px-3 py-2 text-md text-white rounded-full font-bold"
                      onClick={() => handleActivate(user._id)}
                    >
                      Activate
                    </button>
                  )}
                </div>
                <button
                  className="text-red-500"
                  onClick={() => handleDelete(user?._id)}
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

export default ManageUser;
