import { useEffect } from "react";
import confetti from "canvas-confetti";

const Modal = (props) => {
  const { message, status } = { ...props };

  useEffect(() => {
    if (status === "win") confetti();
  }, [status]);

  return (
    <>
      {message && (
        <div className={`modal ${status}`}>
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default Modal;
