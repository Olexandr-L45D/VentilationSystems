// import { Link } from "react-router-dom";
import css from "./AboutUsPage.module.css";
import Bakground from "../../assets/images/blendBakground.png";
// import { useTranslation } from "react-i18next";

export default function AboutUsPage() {
  // const { t, ready } = useTranslation();
  // if (!ready) {
  //   return <div>Loading translations...</div>;
  // }
  return (
    <section
      className={css.container}
      style={{ backgroundImage: `url(${Bakground})` }}
    >
      <section className={css.background}>
        {/* <h1>About</h1> */}
        {/* <section className={css.card}>
          <h1 className={css.cartTitle}>{t("navigation.titleHome")}</h1>
          <h3 className={css.cartText}>{t("navigation.titleWelcom")}</h3>
          <section className={css.cartBtn}>
            <Link to="/catalog">
              <div className={css.buttonViews}>
                <button className={css.btnVie} type="submit">
                  {t("navigation.View")}
                </button>
              </div>
            </Link>
          </section>
        </section> */}
      </section>
    </section>
  );
}
