import { useDisclosure } from "@nextui-org/modal";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";

const AllCommentsModal = () => {
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
              <ModalHeader className="flex flex-col gap-1">
                Give a Comment!!!
              </ModalHeader>

              <ModalBody></ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AllCommentsModal;
