import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { useTranslation } from "react-i18next";
import IconButtonCatalog from "../../assets/images/IconButtonCatalog.png";

const newLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const Navigation = () => {
  const { t, ready } = useTranslation();
  if (!ready) {
    return <div>Loading translations...</div>;
  }
  return (
    <section className={css.container}>
      <section className={css.card}>
        <nav className={css.nav}>
          <div className={css.iconBlok}>
            <div
              className={css.liIcon}
              style={{ backgroundImage: `url(${IconButtonCatalog})` }}
            ></div>
            <NavLink to="/catalog" className={newLinkClass}>
              {t("navigation.catalog")}
            </NavLink>
          </div>

          <NavLink to="/" className={newLinkClass}>
            {t("navigation.home")}
          </NavLink>
          <NavLink to="/" className={newLinkClass}>
            {t("navigation.delivery")}
          </NavLink>
          <NavLink to="/factory" className={newLinkClass}>
            {/* Виробництво */}
            {t("navigation.factory")}
          </NavLink>

          <NavLink to="/contacts" className={newLinkClass}>
            {t("navigation.contacts")}
          </NavLink>
        </nav>
      </section>
    </section>
  );
};

//  <img
//    // src="public/images/IconButtonCatalog.png"
//    src={IconButtonCatalog}
//    alt=""
//    className={css.imgLogo}
//  />;
