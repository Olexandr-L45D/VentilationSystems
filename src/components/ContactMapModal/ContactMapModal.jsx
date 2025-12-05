// ContactMapModal.jsx
import { useState } from "react";
import css from "./ContactMapModal.module.css";
import ContactMap from "../ContactMap/ContactMap";

export default function ContactMapModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={css.openBtn} onClick={() => setIsOpen(true)}>
        Open Full Map
      </button>

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
              <ContactMap fullScreen={true} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
