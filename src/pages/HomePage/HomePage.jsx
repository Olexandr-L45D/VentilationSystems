import { Link } from "react-router-dom";
import css from "./HomePage.module.css";
import { useTranslation } from "react-i18next";
import cardLeft from "../../assets/images/cardLeft.png";
import cardCenter from "../../assets/images/cardCenter.png";
import cardRight from "../../assets/images/cardRight.png";
import VectorHomeCenter from "../../assets/images/VectorHomeCenter.png";
import Advantages from "../../assets/images/Advantages.png";
import aboutUsPage from "../../assets/images/aboutUsPage.png";
// import startHomePage from "../../assets/images/startHomePage.png";
// startHomePage
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
// aboutUsPage
export default function HomePage() {
  const { t, ready } = useTranslation();
  if (!ready) {
    return <div>Loading translations...</div>;
  }
  return (
    <>
      <section className={css.container}>
        <section className={css.background}>
          <section className={css.card}>
            {/* <figure className={css.cardTopImages}>
              <img className={css.bigImages} src={startHomePage} alt="img" />
            </figure> */}
            {/* <h1 className={css.cartTitle}>{t("navigation.titleHome")}</h1>
            <h2 className={css.cartText}>{t("navigation.titleWelcom")}</h2> */}
            <section className={css.containerButtons}>
              <section className={css.cartBtn}>
                <Link to="/catalog">
                  <div className={css.buttonViews}>
                    <button className={css.btnVie} type="submit">
                      {t("navigation.View")}
                    </button>
                  </div>
                </Link>
              </section>
              <section className={css.cartBtnSecond}>
                <Link to="/feedbackPhone">
                  <div className={css.buttonViewsSecond}>
                    <button className={css.btnVieSecond} type="submit">
                      {t("navigation.orderCallback")}
                    </button>
                  </div>
                </Link>
              </section>
            </section>
          </section>
        </section>
        <section className={css.container}>
          <div className={css.titleBlock}>
            <h2 className={css.cartTitleText}>
              {/* Best sellers */}
              {t("navigation.bestSel")}
            </h2>
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
        <figure className={css.cardImagesFigure}>
          <img className={css.imagFigure} src={VectorHomeCenter} alt="" />
        </figure>
        <section className={css.container}>
          <div className={css.titleBlock}>
            <h2 className={css.cartTitleText}>
              {/* Advantages */}
              {t("navigation.advantages")}
            </h2>
          </div>

          <figure className={css.cardBigImages}>
            <img className={css.bigImages} src={Advantages} alt="" />
          </figure>
        </section>
        <section className={css.container}>
          <div className={css.titleBlock}>
            <h2 className={css.cartTitleText}>
              {/* About us */}
              {t("navigation.aboutUs")}
            </h2>
          </div>

          <figure className={css.cardBigImages}>
            <img className={css.bigImages} src={aboutUsPage} alt="" />
          </figure>
        </section>
        <section className={css.container}>
          <div className={css.titleBlock}>
            <h2 className={css.cartTitleText}>
              {/* Producer */}
              {t("navigation.producer")}
            </h2>
          </div>

          <figure className={css.cardProducer}>
            <p className={css.cardProdText}>
              {/* Black Icon Srl (Italy) — Italian manufacturer of industrial
              ventilation and drying systems. In-house engineering development
              and full-cycle production. */}
              {t("navigation.cardProdText")}
            </p>
          </figure>
        </section>
      </section>
      <ScrollToTopButton />
    </>
  );
}
