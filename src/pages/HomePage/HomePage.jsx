import { Link } from "react-router-dom";
import css from "./HomePage.module.css";
import { useTranslation } from "react-i18next";
import cardLeft from "../../assets/images/cardLeft.png";
import cardCenter from "../../assets/images/cardCenter.png";
import cardRight from "../../assets/images/cardRight.png";

export default function HomePage() {
  const { t, ready } = useTranslation();
  if (!ready) {
    return <div>Loading translations...</div>;
  }
  return (
    <section className={css.container}>
      <section className={css.background}>
        <section className={css.card}>
          <h1 className={css.cartTitle}>{t("navigation.titleHome")}</h1>
          <h2 className={css.cartText}>{t("navigation.titleWelcom")}</h2>
          <section className={css.cartBtn}>
            <Link to="/catalog">
              <div className={css.buttonViews}>
                <button className={css.btnVie} type="submit">
                  {t("navigation.View")}
                </button>
              </div>
            </Link>
          </section>
        </section>
      </section>
      <section className={css.container}>
        <div className={css.titleBlock}>
          <h2 className={css.cartTitleText}>Best sellers</h2>
        </div>

        <ul className={css.ulCard}>
          <li className={css.li}>
            <figure className={css.imgCard}>
              <img className={css.images} src={cardLeft} alt="" />
            </figure>
          </li>
          <li className={css.li}>
            <figure className={css.imgCard}>
              <img className={css.images} src={cardCenter} alt="" />
            </figure>
          </li>
          <li className={css.li}>
            <figure className={css.imgCard}>
              <img className={css.images} src={cardRight} alt="" />
            </figure>
          </li>
        </ul>
      </section>
    </section>
  );
}
