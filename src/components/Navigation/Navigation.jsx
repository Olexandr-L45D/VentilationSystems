import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { useTranslation } from "react-i18next";
import CartIconHeder from "../CartIconHeder/CartIconHeder";
import { AiFillPhone } from "react-icons/ai";

const newLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  const { i18n } = useTranslation(); // Додано хук
  // Функція для зміни мови
  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };
  const { t, ready } = useTranslation();
  if (!ready) {
    return <div>Loading translations...</div>;
  }
  return (
    <section className={css.container}>
      <div className={css.titleImg}>
        <p className={css.imgLogo}>LOGO</p>
      </div>
      <div className={css.title}>
        <Link to="/">
          <p className={css.iconLogo}>ITALVENT</p>
        </Link>
      </div>
      <section className={css.card}>
        <nav className={css.nav}>
          <NavLink to="/" className={newLinkClass}>
            {t("navigation.home")}
          </NavLink>
          <NavLink to="/factory" className={newLinkClass}>
            {/* Виробництво */}
            {t("navigation.factory")}
          </NavLink>
          <NavLink to="/catalog" className={newLinkClass}>
            {t("navigation.catalog")}
          </NavLink>
          <NavLink to="/contacts" className={newLinkClass}>
            {t("navigation.contacts")}
          </NavLink>
        </nav>
      </section>
      <div className={css.languageSwitcher}>
        <button
          className={css.activeButton}
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
        <button
          className={css.activeButton}
          onClick={() => changeLanguage("it")}
        >
          IT
        </button>
        {/* <button
          className={css.activeButton}
          onClick={() => changeLanguage("uk")}
        >
          UA
        </button> */}
      </div>
      <NavLink to="/feedbackPhone" className={newLinkClass}>
        {/* {t("navigation.feedbackPhone")} */}
        <p className={css.iconPhone}>
          <AiFillPhone className={css.iconPhon} />
          {/* Зворотній дзвінок */}
          {t("navigation.callback")}
        </p>
      </NavLink>
      <div>
        <CartIconHeder />
      </div>
    </section>
  );
};
