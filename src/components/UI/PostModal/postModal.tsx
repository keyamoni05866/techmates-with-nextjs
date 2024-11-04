import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";

import CreatePost from "../../modules/CreatPost/CreatePost";

const PostModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Button
        className="px-[20px] py-[3px] bg-[#9753d3] text-white rounded-full !text-md  flex justify-center items-center gap-1"
        onPress={onOpen}
      >
        {" "}
        <svg
          className="size-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Write Post
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                What is on your mind? Just Write it!!!
              </ModalHeader>
              <ModalBody>
                <CreatePost closeModal={() => onOpenChange()} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PostModal;
