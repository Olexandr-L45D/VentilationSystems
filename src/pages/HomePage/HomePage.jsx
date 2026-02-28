import { Link } from "react-router-dom";
import css from "./HomePage.module.css";
import { useTranslation } from "react-i18next";
import cardLeft from "../../assets/images/fanHomeLeft.png";
import cardCenter from "../../assets/images/fanHomeCenter.png";
import cardRight from "../../assets/images/fanHomeRight.png";
import VectorHomeCenter from "../../assets/images/VectorHomeCenter.png";
import Advantages from "../../assets/images/Advantages.png";
import startHomePage from "../../assets/images/startHomePage.png";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import { BiSolidUser } from "react-icons/bi";

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
            <figure className={css.cardTopImages}>
              <img className={css.bigImagesTop} src={startHomePage} alt="img" />
            </figure>
            <div className={css.heroContent}>
              <h1 className={css.cartTitleTop}>{t("navigation.titleHome")}</h1>
              <h2 className={css.cartTextTop}>{t("navigation.titleWelcom")}</h2>
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
            </div>
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
            <li className={css.liImgCard}>
              <figure className={css.imgCard}>
                <img className={css.images} src={cardLeft} alt="" />
              </figure>
              <h3 className={css.cartImagesText}>
                {/* BMN 602 – Forward-Curved Centrifugal Fan for Industrial
                Ventilation */}
                {t("homepage.bestSelImagesLeft")}
              </h3>
            </li>
            <li className={css.liImgCard}>
              <figure className={css.imgCard}>
                <img className={css.images} src={cardCenter} alt="" />
              </figure>
              <h3 className={css.cartImagesText}>
                {/* BMN 402 – Forward-Curved Centrifugal Fan for Industrial Ventilation */}
                {t("homepage.bestSelImagesCenter")}
              </h3>
            </li>
            <li className={css.liImgCard}>
              <figure className={css.imgCard}>
                <img className={css.images} src={cardRight} alt="" />
              </figure>
              <h3 className={css.cartImagesText}>
                {/* Axial fan Top model */}
                {t("homepage.bestSelImagesRight")}
              </h3>
            </li>
          </ul>
        </section>
        <figure className={css.cardImagesFigure}>
          <img className={css.imagFigure} src={VectorHomeCenter} alt="" />
        </figure>
        <section className={css.containerAdvantages}>
          <div className={css.titleBlock}>
            <h2 className={css.cartTitleTextAdvantages}>
              {/* Advantages */}
              {t("navigation.advantages")}
            </h2>
          </div>
          <h3 className={css.labelTop}>
            {/* High quality */}
            {t("homepage.advantagesHight")}
          </h3>
          <h3 className={css.labelLeft}>
            {/* Flexibility on service and customization */}
            {t("homepage.advantageFlexibility")}
          </h3>
          <figure className={css.cardBigImages}>
            <img className={css.bigImages} src={Advantages} alt="" />
          </figure>
          <h3 className={css.labelRight}>
            {/* Fast delivery */}
            {t("homepage.bestSelFast")}
          </h3>
          <h3 className={css.labelBotton}>
            {/* Every model of fans can be made in stainless steel */}
            {t("homepage.bestSelEvery")}
          </h3>
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

        <section className={css.containerReviews}>
          <div className={css.titleBlock}>
            <h2 className={css.cartTitleText}>
              {/* Reviews */}
              {t("homepage.titleReviews")}
            </h2>
          </div>
          <ul className={css.ulCard}>
            <li className={css.reviewsBlock}>
              <h3 className={css.reviewsTitle}>
                <BiSolidUser />
                {/* Oleh H., Production Facility Owner */}
                {t("homepage.bestReviews")}
              </h3>
              <p className={css.reviewsText}>{t("homepage.bestReviewsLeft")}</p>
            </li>
            <li className={css.reviewsBlock}>
              <h3 className={css.reviewsTitle}>
                <BiSolidUser />
                {/* Maria L., Procurement Manager */}
                {t("homepage.bestReviewsRight")}
              </h3>
              <p className={css.reviewsText}>{t("homepage.bestTextRight")}</p>
            </li>
          </ul>
        </section>
      </section>
      <ScrollToTopButton />
    </>
  );
}
