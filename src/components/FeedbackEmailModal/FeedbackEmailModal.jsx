// ContactMapModal.jsx
import { useState } from "react";
import css from "./FeedbackEmailModal.module.css";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

export default function FeedbackEmailModal() {
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
              <FeedbackForm fullScreen={true} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
