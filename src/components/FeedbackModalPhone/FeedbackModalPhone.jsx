// ContactMapModal.jsx
import { useState } from "react";
import css from "./FeedbackModalPhone.module.css";
import FeedbackFormPhone from "../FeedbackFormPhone/FeedbackFormPhone";

export default function FeedbackModalPhone() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className={css.overlay} onClick={() => setIsOpen(false)}>
          <div
            className={css.modal}
            onClick={e => e.stopPropagation()} // щоб не закривалось при кліку всередину
          >
            <button className={css.closeBtn} onClick={() => setIsOpen(false)}>
              ✕
            </button>

            <div className={css.mapBox}>
              <FeedbackFormPhone fullScreen={true} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
