import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.css";
import { useTranslation } from "react-i18next";
// import CartIconHeder from "../CartIconHeder/CartIconHeder";
import { AiFillPhone } from "react-icons/ai";
import SearchBoxFiltr from "../SearchBoxFiltr/SearchBoxFiltr";
import LogoVent from "../../assets/images/logoheader.png";

const newLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Header = () => {
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
      <header className={css.header}>
        <figure className={css.titleImg}>
          <img src={LogoVent} alt="" className={css.imgLogo} />
        </figure>

        <SearchBoxFiltr />
        <article className={css.languageSwitcher}>
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
        </article>
        <NavLink to="/feedbackPhone" className={newLinkClass}>
          <p className={css.iconPhoneNumb}>+393663883621</p>
          <p className={css.iconPhoneBlock}>
            <AiFillPhone className={css.iconPhon} />
            {/* Зворотній дзвінок */}
            {t("navigation.callback")}
          </p>
        </NavLink>
        <div>{/* <CartIconHeder /> */}</div>
      </header>
    </section>
  );
};
