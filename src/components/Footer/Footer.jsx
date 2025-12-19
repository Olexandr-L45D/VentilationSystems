import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Footer.module.css";
import { AiFillPhone } from "react-icons/ai";
import FeedbackMenu from "../FeedbackMenu/FeedbackMenu";
import { MdEmail } from "react-icons/md";
// import PdfActions from "../ButtonExportPdf/ButtonExportPdf";
import PdfActionsCondition from "../ConditionsMenu/ConditionsMenu";
import { useTranslation } from "react-i18next";
import LogoVent from "/src/assets/images/FooterLogo.png";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane, FaViber } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const newLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const newLinkClassSecond = ({ isActive }) => {
  return clsx(css.linkSecond, isActive && css.active);
};

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <section className={css.container}>
      <div className={css.titleText}>
        <div className={css.titleImg}>
          <img src={LogoVent} alt="" className={css.imgLogo} />
        </div>
        <p className={css.textLogo}>
          Energy-efficient solutions with high performance, quiet operation, and
          guaranteed safety.
        </p>
      </div>

      <section className={css.cardLink}>
        <h2 className={css.titleBlok}>Navigation</h2>

        <NavLink to="/" className={newLinkClassSecond}>
          {/* {t("navigation.home")} */}
          <p>About Us</p>
        </NavLink>

        <NavLink to="/catalog" className={newLinkClassSecond}>
          {t("navigation.catalog")}
        </NavLink>

        <NavLink to="/contacts" className={newLinkClassSecond}>
          {t("navigation.contacts")}
        </NavLink>
      </section>

      <section className={css.cardTextBl}>
        <h2 className={css.titleBlok}>Contact information</h2>

        <div className={css.titleText}>
          <p className={css.text}>
            <AiFillPhone /> +3904451716513
          </p>
          <p className={css.text}>
            <MdEmail className={css.icon} /> lyubov@blackicon.it
          </p>
          <p className={css.text}>Via Santa Maria, nr 84</p>
          <p className={css.text}>36030-Sarcedo-Vcenza-Italia</p>
        </div>
      </section>

      <div className={css.buttonIconBlok}>
        <div className={css.buttonIcon}>
          {/* <GoArrowLeft className={css.icons} /> */}
          {/* <p>Умови співпраці</p> */}
          <PdfActionsCondition
            viewUrl="/pdfs/mnItalvent_1.pdf"
            viewUrlDelivery="/pdfs/mnItalvent_1.pdf"
            downloadUrl="/pdfs/mnItalvent_1.pdf"
          />
        </div>
      </div>

      <section className={css.cardTextBl}>
        <h2 className={css.titleBlok}>
          <FeedbackMenu />
        </h2>

        <div className={css.iconBlocFooter}>
          <p className={css.text}>
            <FaLinkedin className={css.icon} />
          </p>
          <p className={css.text}>
            <IoLogoInstagram className={css.icon} />
          </p>
          <p className={css.text}>
            <FaTelegramPlane className={css.icon} />
          </p>
          <p className={css.text}>
            <FaViber className={css.icon} />
          </p>
          <p className={css.text}>
            <FaWhatsapp className={css.icon} />
          </p>
        </div>
      </section>
      <section className={css.card}>
        <nav className={css.nav}>
          <NavLink to="/feedbackEmail" className={newLinkClass}>
            <p className={css.navEmail}>
              <MdEmail className={css.icon} />
              {/* Написати */}
              {t("footernav.footerWri")}
            </p>
          </NavLink>
        </nav>
      </section>
    </section>
  );
};
