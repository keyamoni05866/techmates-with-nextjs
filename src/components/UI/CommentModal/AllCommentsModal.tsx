import { TComments, TPost } from "@/src/types";
import { useDisclosure } from "@nextui-org/modal";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import SingleComment from "./SingleComment";
import CreateCommentModal from "./CreateCommentModal";

const AllCommentsModal = ({
  comments,
  post,
}: {
  comments: TComments;
  post: TPost;
}) => {
  // console.log(comments);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <button onClick={onOpen} className="flex items-center">
        <p className="">comments</p>
      </button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="mb-5 mt-3">
                <h4 className="text-xl text-center font-bold">Comments</h4>
                {comments?.length ? (
                  comments?.map((singleComment) => (
                    <SingleComment
                      post={post}
                      singleComment={singleComment}
                      key={singleComment?._id}
                    />
                  ))
                ) : (
                  <>
                    <h4 className="text-xl font-semibold">No Comments Yet</h4>
                    <p className="text-gray-500 text-sm mt-2">
                      Be the first to share your thoughts or ask a question
                      about this post!
                    </p>
                    <CreateCommentModal post={post} />
                  </>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AllCommentsModal;
