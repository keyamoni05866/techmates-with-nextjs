import { useDisclosure } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { TPost } from "@/src/types";
import { Input } from "@nextui-org/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCommentMutation } from "@/src/redux/Api/PostApi/postApi";
import { toast } from "sonner";

const CreateCommentModal = ({ post }: { post: TPost }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { register, handleSubmit } = useForm<FieldValues>();
  const [createComment] = useCommentMutation();

  const handleCreateComment: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data, post?._id);

    const commentData = {
      postId: post?._id,
      comment: data.comment,
    };

    try {
      const res = await createComment(commentData).unwrap();
      toast.success(`${res.message}`, { duration: 3000 });
    } catch (err: any) {
      toast.error(err.data?.message, { duration: 3000 });
    }
  };

  return (
    <div>
      <button onClick={onOpen} className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="lg:size-6 size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          />
        </svg>
        <p className=" text-lg font-semibold ms-1 ">Comment</p>
      </button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Give a Comment!!!
              </ModalHeader>

              <ModalBody>
                <form onSubmit={handleSubmit(handleCreateComment)}>
                  <div>
                    <label className="block text-sm text-gray-500 font-medium leading-6 ms-1 ">
                      Comment:
                    </label>
                    <div className="mt-2 ">
                      <Input
                        {...register("comment")}
                        type="text"
                        variant="bordered"
                        className="w-full  "
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 my-5">
                    <Button onPress={onClose} className="custom-outline-btn ">
                      Close
                    </Button>
                    <button type="submit" className="custom-btn ">
                      Comment
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

export default CreateCommentModal;
