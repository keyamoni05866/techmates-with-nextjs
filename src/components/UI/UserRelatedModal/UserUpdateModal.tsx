"use client";

import { useUpdateUserMutation } from "@/src/redux/Api/UserApi/userApi";
import {
  currentToken,
  currentUser,
  signInUser,
} from "@/src/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hook";
import { ImageUploadFunc } from "@/src/utils";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type TUpdateUser = {
  name?: string;
  profilePicture?: string;
  number?: string;
  address?: string;
};

const UserUpdateModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm<TUpdateUser>();
  const user = useAppSelector(currentUser);
  const token = useAppSelector(currentToken);
  const dispatch = useAppDispatch();
  const [updateUser] = useUpdateUserMutation();
  //   console.log(token);

  const handleUpdateUser: SubmitHandler<TUpdateUser> = async (data) => {
    const toastId = toast.loading("Updating");
    if (data.profilePicture && data.profilePicture.length > 0) {
      try {
        const file = data.profilePicture[0] as any;
        const imageUrl = await ImageUploadFunc(file);
        data.profilePicture = imageUrl;
      } catch (error: any) {
        toast.error(error.data.message, { duration: 1000 });
        return;
      }
    } else {
      data.profilePicture = user?.profilePicture;
    }

    const UpdateUserData = {
      _id: user?._id,
      ...data,
    };

    try {
      const res = await updateUser(UpdateUserData).unwrap();
      const userInfo = res.data;
      dispatch(signInUser({ userInfo, token }));

      toast.success(`${res.message}`, { id: toastId, duration: 1000 });
    } catch (error: any) {
      toast.error(error.data.message, { id: toastId, duration: 1000 });
    }
  };
  return (
    <div>
      <button
        onClick={onOpen}
        className="custom-outline-btn !text-md  flex justify-center items-center  "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
        Edit Profile{" "}
      </button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex  justify-center">
                Edit Your Profile!!!
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit(handleUpdateUser)}>
                  <div className="grid grid-cols-1  gap-2  mt-3 mb-4   ">
                    <div>
                      <label className="block text-sm text-gray-500 font-medium leading-6 ms-1 ">
                        Name:
                      </label>
                      <div className="mt-2 ">
                        <Input
                          {...register("name")}
                          type="text"
                          variant="bordered"
                          defaultValue={user?.name}
                          className="w-full  "
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 font-medium leading-6 ms-1 ">
                        Phone Number:
                      </label>
                      <div className="mt-2 ">
                        <Input
                          {...register("number")}
                          type="text"
                          variant="bordered"
                          defaultValue={user?.number}
                          className="w-full  "
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 font-medium leading-6 ms-1 ">
                        Your Current Address:
                      </label>
                      <div className="mt-2 ">
                        <Input
                          {...register("address")}
                          type="text"
                          variant="bordered"
                          defaultValue={user?.address}
                          className="w-full  "
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-500 font-medium leading-6 ms-1 ">
                        Profile Image:
                      </label>
                      <div className="mt-2 ">
                        <Input
                          {...register("profilePicture")}
                          type="file"
                          variant="bordered"
                          className="w-full  "
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <button type="submit" className="custom-btn w-full">
                        Update
                      </button>
                    </div>
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

export default UserUpdateModal;
