import { Link } from "react-router-dom";
import css from "./HomePage.module.css";
import { useTranslation } from "react-i18next";
import cardLeft from "../../assets/images/fanHomeLeft.png";
import cardCenter from "../../assets/images/fanHomeCenter.png";
import cardRight from "../../assets/images/fanHomeRight.png";
import VectorHomeCenter from "../../assets/images/VectorHomeCenter.png";
import Advantages from "../../assets/images/Advantages.png";
// import aboutUsPage from "../../assets/images/aboutUsPage.png";
import startHomePage from "../../assets/images/startHomePage.png";
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
                BMN 602 – Forward-Curved Centrifugal Fan for Industrial
                Ventilation
                {/* {t("navigation.bestSel")} */}
              </h3>
            </li>
            <li className={css.liImgCard}>
              <figure className={css.imgCard}>
                <img className={css.images} src={cardCenter} alt="" />
              </figure>
              <h3 className={css.cartImagesText}>
                BMN 402 – Forward-Curved Centrifugal Fan for Industrial
                Ventilation
                {/* {t("navigation.bestSel")} */}
              </h3>
            </li>
            <li className={css.liImgCard}>
              <figure className={css.imgCard}>
                <img className={css.images} src={cardRight} alt="" />
              </figure>
              <h3 className={css.cartImagesText}>
                Axial fan Top model
                {/* {t("navigation.bestSel")} */}
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
            High quality
            {/* {t("navigation.bestSel")} */}
          </h3>
          <h3 className={css.labelLeft}>
            Flexibility on service and customization
            {/* {t("navigation.bestSel")} */}
          </h3>
          <figure className={css.cardBigImages}>
            <img className={css.bigImages} src={Advantages} alt="" />
          </figure>
          <h3 className={css.labelRight}>
            Fast delivery
            {/* {t("navigation.bestSel")} */}
          </h3>
          <h3 className={css.labelBotton}>
            Every model of fans can be made in stainless steel
            {/* {t("navigation.bestSel")} */}
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

        <section className={css.container}>
          <div className={css.titleBlock}>
            <h2 className={css.cartTitleText}>
              Reviews
              {/* {t("navigation.aboutUs")} */}
            </h2>
          </div>
          <ul className={css.ulCard}>
            <li className={css.reviewsBlock}>
              <h3 className={css.reviewsTitle}>
                Oleh H., Production Facility Owner
                {/* {t("navigation.bestSel")} */}
              </h3>
              <p className={css.reviewsText}>
                We ordered ventilation systems for our paint booth. The
                equipment operates quietly, efficiently, and without
                interruptions. Delivery was fast, and the team helped us choose
                the right model. Very satisfied with the cooperation.
              </p>
            </li>
            <li className={css.reviewsBlock}>
              <h3 className={css.reviewsTitle}>
                Maria L., Procurement Manager
                {/* {t("navigation.bestSel")} */}
              </h3>
              <p className={css.reviewsText}>
                We purchased HARIA industrial fans for our company. The quality
                is excellent — you can immediately see the European
                manufacturing standards. We especially appreciated the ability
                to customize the units to our needs. Highly recommended.
              </p>
            </li>
          </ul>
        </section>
      </section>
      <ScrollToTopButton />
    </>
  );
}
