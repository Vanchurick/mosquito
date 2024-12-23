import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { Dialog } from "./StyledComponents";

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
    </Dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
