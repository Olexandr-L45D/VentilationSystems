import css from "./DeliveryPage.module.css";
import { useTranslation } from "react-i18next";
// import startHomePage from "../../assets/images/startHomePage.png";
// startHomePage

export default function DeliveryPage() {
  const { t, ready } = useTranslation();
  if (!ready) {
    return <div>Loading translations...</div>;
  }
  return (
    <>
      <section className={css.container}>
        <section className={css.container}>
          <div className={css.titleBlock}>
            <h2 className={css.cartTitleText}>
              {/* Payment */}
              {t("navigation.payment")}
            </h2>
          </div>

          <figure className={css.cardProducer}>
            <p className={css.cardProdText}>
              {/* Payment by bank transfer (cashless payment) for individuals and legal entities. */}
              {t("navigation.cardPayText")}
            </p>
          </figure>
        </section>
        <section className={css.container}>
          <div className={css.titleBlockSecond}>
            <h2 className={css.cartTitleText}>
              {/* Delivery  */}
              {t("navigation.deliveryTitle")}
            </h2>
          </div>

          <figure className={css.cardProducer}>
            <p className={css.cardProdText}>
              {/* EXW Black Icon Srl - Via Santa Maria, nr 84, 36030 – Sarcedo – Vcenza – Italia */}
              {t("navigation.cardDelText")}
            </p>
          </figure>
        </section>
      </section>
    </>
  );
}
