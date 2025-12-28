// ContactMapModal.jsx
import { useState } from "react";
import css from "./FeedbackEmailModal.module.css";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import { useNavigate } from "react-router-dom";

export default function FeedbackEmailModal() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsOpen(false);
    navigate("/"); // ⬅️ ПЕРЕХІД НА HOME
  };

  return (
    <>
      {isOpen && (
        <div className={css.overlay} onClick={closeModal}>
          <div
            className={css.modal}
            onClick={e => e.stopPropagation()} // щоб не закривалось при кліку всередину
          >
            <button className={css.closeBtn} onClick={closeModal}>
              ✕
            </button>

            <div className={css.mapBox}>
              <FeedbackForm fullScreen={true} onSuccess={closeModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
