import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "../Button/Button";
import { Dialog, Form } from "./StyledComponents";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      openModal() {
        dialog.current.showModal();
      },
      closeModal() {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <Dialog ref={dialog}>
      {children}
      <Form method="dialog">
        <Button>Закрити</Button>
      </Form>
    </Dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
