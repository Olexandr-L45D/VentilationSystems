import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Footer.module.css";
import { AiFillPhone } from "react-icons/ai";
import FeedbackMenu from "../FeedbackMenu/FeedbackMenu";
import { MdEmail } from "react-icons/md";
// import PdfActions from "../ButtonExportPdf/ButtonExportPdf";
import PdfActionsCondition from "../ConditionsMenu/ConditionsMenu";
// import { useTranslation } from "react-i18next";

const newLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Footer = () => {
  // const { t, ready } = useTranslation();
  // if (!ready) {
  //   return <div>Loading translations...</div>;
  // }
  return (
    <section className={css.container}>
      <div className={css.title}>
        <Link to="/">
          <p className={css.iconLogo}>ITALVENT</p>
        </Link>
      </div>
      <div className={css.titleText}>
        <p className={css.text}>Via Marco Corner nr2</p>
        {/* <p>36016 Thiene (VI), +3904451716513</p> */}
        {/* <AiFillPhone /> */}
        <p className={css.text}>
          <AiFillPhone /> +3904451716513
        </p>
        {/* <p>piva 02947610248</p> */}
      </div>
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
      <section className={css.card}>
        <nav className={css.nav}>
          <NavLink className={newLinkClass}>
            {/* {t("navigation.home")} */}
            {/* <p>У?</p> */}
            {/* <PdfActions
              viewUrl="/pdfs/mnItalvent_1.pdf"
              downloadUrl="/pdfs/mnItalvent_1.pdf"
            /> */}
          </NavLink>
          <NavLink to="/" className={newLinkClass}>
            {/* {t("navigation.factory")} */}
            {/* <p>Написати на телеграм та інстаграм</p> */}
            <FeedbackMenu />
          </NavLink>
          <NavLink to="/feedbackEmail" className={newLinkClass}>
            {/* {t("navigation.home")} */}
            <p className={css.navEmail}>
              <MdEmail className={css.icon} />
              Написати
            </p>
          </NavLink>
        </nav>
      </section>
    </section>
  );
};
