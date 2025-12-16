import { useState } from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane, FaViber } from "react-icons/fa";
import css from "./FeedbackMenu.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const FeedbackMenu = () => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      {/* Кнопка відкриття модалки */}
      <div className={css.feedbackEntryBtn} onClick={() => setOpenModal(true)}>
        {/* Відгукнутись */}
        {t("footernav.footerResp")}
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
            <h2 className={css.modalTitle}>
              {/* Зв’язатися з нами */}
              {t("footernav.footCallUs")}
            </h2>

            <div className={css.modalButtons}>
              {/* Instagram */}
              <a
                href="https://instagram.com/alex970076" // ← вставити НІК ЗАМОВНИКА
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
                href="https://t.me/OlexandrDnUkrTelegram" // ← вставити НІК ЗАМОВНИКА
                target="_blank"
                rel="noopener noreferrer"
                className={css.modalBtn}
              >
                <FaTelegramPlane className={css.icon} />
                Telegram
              </a>
              {/* Viber */}
              <a
                href="viber://chat?number=%2B380631705885" // ← вставити номер ЗАМОВНИКА
                className={css.modalBtn}
              >
                <FaViber className={css.icon} />
                Viber
              </a>
              {/* ✔ WhatsApp */}
              <a
                href="https://wa.me/380631705885" // ← номер БЕЗ +
                target="_blank"
                rel="noopener noreferrer"
                className={css.modalBtn}
              >
                <FaWhatsapp className={css.icon} />
                WhatsApp
              </a>

              {/* ✔ LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ВАШ_ПРОФІЛЬ" // ← вставити лінк
                target="_blank"
                rel="noopener noreferrer"
                className={css.modalBtn}
              >
                <FaLinkedin className={css.icon} />
                LinkedIn
              </a>
            </div>

            <button
              className={css.modalClose}
              onClick={() => {
                setOpenModal(false);
              }}
            >
              {/* Закрити */}
              {t("footernav.footFeedbClose")}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackMenu;
