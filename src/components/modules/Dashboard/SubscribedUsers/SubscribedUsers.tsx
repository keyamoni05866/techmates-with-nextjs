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

import { TUser } from "@/src/types";
import { useGetUsersQuery } from "@/src/redux/Api/UserApi/userApi";

const SubscribedUsers = () => {
  const { data: AllUsers, isLoading } = useGetUsersQuery({});
  const paidUsers = AllUsers?.data?.filter(
    (user: TUser) => user.paymentStatus === "paid",
  );

  console.log(paidUsers);

  return (
    <Table
      isStriped
      aria-label="Example static collection table"
      className="lg:p-12 p-3"
    >
      <TableHeader>
        <TableColumn>Image</TableColumn>
        <TableColumn>NAME</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>Payment Status</TableColumn>

        <TableColumn>STATUS</TableColumn>
        {/* <TableColumn>Action</TableColumn> */}
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        loadingContent={<Spinner color="secondary" />}
      >
        {paidUsers?.map((user: TUser) => (
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
            <TableCell>{user.paymentStatus}</TableCell>

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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SubscribedUsers;
