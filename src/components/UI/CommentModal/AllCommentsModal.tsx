import { useDisclosure } from "@nextui-org/modal";
import { Modal, ModalBody, ModalContent } from "@nextui-org/modal";

import SingleComment from "./SingleComment";
import CreateCommentModal from "./CreateCommentModal";

import { TComments, TPost } from "@/src/types";

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
      <button className="flex items-center" onClick={onOpen}>
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
                      key={singleComment?._id}
                      post={post}
                      singleComment={singleComment}
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
