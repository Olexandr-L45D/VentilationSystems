import { useState } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import css from "./FeedbackMenu.module.css";

const FeedbackMenu = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* Кнопка відкриття модалки */}
      <div className={css.feedbackEntryBtn} onClick={() => setOpenModal(true)}>
        Відгукнутись
      </div>

      {openModal && (
        <div
          className={css.feedbackModalOverlay}
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <div
            className={css.feedbackModal}
            onClick={e => e.stopPropagation()} // Не закривати при кліку всередині модалки
          >
            <h2 className={css.modalTitle}>Зв’язатися з нами</h2>

            <div className={css.modalButtons}>
              {/* Instagram */}
              <a
                href="https://instagram.com/alex970076"
                // href="https://instagram.com/alex970076?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
                className={css.modalBtn}
              >
                <IoLogoInstagram className={css.icon} />
                Instagram
              </a>
              {/* Telegram */}
              <a
                href="https://t.me/OlexandrDnUkrTelegram"
                target="_blank"
                rel="noopener noreferrer"
                className={css.modalBtn}
              >
                <FaTelegramPlane className={css.icon} />
                Telegram
              </a>
            </div>

            <button
              className={css.modalClose}
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Закрити
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackMenu;

// import { useState } from "react";
// import { IoLogoInstagram } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
// import { FaTelegramPlane } from "react-icons/fa";
// import css from "./FeedbackMenu.module.css";
// import FeedbackForm from "../FeedbackForm/FeedbackForm";

// const FeedbackMenu = () => {
//   const [open, setOpen] = useState(false);
//   const [openForm, setOpenForm] = useState(true);

//   return (
//     <>
//       {/* Кнопка відкриття */}
//       <div className={css.feedbackEntryBtn} onClick={() => setOpen(true)}>
//         Написати нам
//       </div>

//       {/* Модалка */}
//       {open && (
//         <div
//           className={css.feedbackModalOverlay}
//           onClick={() => setOpen(false)}
//         >
//           <div className={css.feedbackModal} onClick={e => e.stopPropagation()}>
//             <h2 className={css.modalTitle}>Зв’язатися з нами</h2>

//             <div className={css.modalButtons}>
//               <a
//                 href="https://instagram.com/your_company"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={css.modalBtn}
//               >
//                 <IoLogoInstagram className={css.icon} />
//                 Instagram
//               </a>

//               {/* <a
//                 href="mailto:litvinenko1978aleks@gmail.com"
//                 className={css.modalBtn}
//               >
//                 <MdEmail className={css.icon} />
//                 Email
//               </a> */}

//               <a
//                 href="https://t.me/OlexandrDnUkrTelegram"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={css.modalBtn}
//               >
//                 <FaTelegramPlane className={css.icon} />
//                 Telegram
//               </a>
//               <MdEmail className={css.iconEm} />
//               {openForm && (
//                 <div>
//                   {/* <MdEmail className={css.icon} /> */}
//                   <FeedbackForm />
//                   <button
//                     className={css.modalClose}
//                     onClick={() => setOpenForm(true)}
//                   >
//                     {/* Закрити */}
//                   </button>
//                 </div>
//               )}
//             </div>

//             <button className={css.modalClose} onClick={() => setOpen(false)}>
//               Закрити
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default FeedbackMenu;
