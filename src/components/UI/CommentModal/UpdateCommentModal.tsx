import { useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@nextui-org/input";
import { toast } from "sonner";

import { useUpdateCommentMutation } from "@/src/redux/Api/PostApi/postApi";
import { TComment, TPost } from "@/src/types";

const UpdateCommentModal = ({
  comment,
  post,
}: {
  comment: TComment;
  post: TPost;
}) => {
  //   console.log("comment", comment, "post", post);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm<FieldValues>();
  const [updateComment] = useUpdateCommentMutation();

  const handleUpdateComment: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    const postId = post._id;
    const commentUpdateData = {
      commentId: comment._id,
      commentText: data.comment,
    };

    try {
      const res = await updateComment({
        postId,
        ...commentUpdateData,
      }).unwrap();

      toast.success(res?.message, { duration: 3000 });
    } catch (error: any) {
      toast.error(error.data?.message, { duration: 3000 });
    }
  };

  return (
    <div>
      <button onClick={onOpen}>
        <svg
          className="size-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Update Comment!!!
              </ModalHeader>

              <ModalBody>
                <form onSubmit={handleSubmit(handleUpdateComment)}>
                  <div>
                    <label
                      className="block text-sm text-gray-500 font-medium leading-6 ms-1 "
                      htmlFor="comment"
                    >
                      Comment:
                    </label>
                    <div className="mt-2 ">
                      <Input
                        {...register("comment")}
                        className="w-full  "
                        defaultValue={comment?.comment}
                        type="text"
                        variant="bordered"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 my-5">
                    <Button className="custom-outline-btn " onPress={onClose}>
                      Close
                    </Button>
                    <button className="custom-btn " type="submit">
                      Update
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

export default UpdateCommentModal;
