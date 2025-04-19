"use client";
import { Modal, ModalContent, Button, useDisclosure } from "@heroui/react";
import { AuthForm } from "../form/AuthForm";

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
        }}
        isOpen={isOpen}
        radius="lg"
        onOpenChange={onOpenChange}
        placement="bottom-center"
      >
        <ModalContent>
          <AuthForm />
        </ModalContent>
      </Modal>
    </>
  );
}
