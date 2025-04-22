"use client";
import { Modal, ModalContent, Button, useDisclosure } from "@heroui/react";
import AuthModalContent from "./AuthModalContent";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button color="secondary" onPress={onOpen}>
        Open Modal
      </Button>
      <Modal
        backdrop="blur"
        classNames={{
          backdrop: "bg-[#000000]/50 backdrop-opacity-80",
          base: "flex shadow-lg w-full max-w-4xl mx-auto h-[640px] rounded-t-3xl rounded-b-none md:rounded-b-3xl",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
      >
        <ModalContent>
          <AuthModalContent />
        </ModalContent>
      </Modal>
    </>
  );
}
