// AboutFactoryPage
// import { Link } from "react-router-dom";
import css from "./AboutFactoryPage.module.css";
import { useTranslation } from "react-i18next";

export default function AboutFactoryPage() {
  const { t, ready } = useTranslation();
  if (!ready) {
    return <div>Loading translations...</div>;
  }
  return (
    <div className={css.container}>
      <section className={css.card}>
        <h1 className={css.cartTitle}>{t("navigation.titleHome")}</h1>
        <h3 className={css.cartText}>
          Chi siamo Ventilatori industriali ITALVENT offre una vasta gamma di
          prodotti che rispondono alle necessità della ventilazione industriale:
          dai piccoli ventilatori di processo, fino ai ventilatori per le
          applicazioni su macchinari e forni industriali. Oltre ai ventilatori
          ci occupiamo anche della fornitura di motori elettrici.
        </h3>
        {/* <h3 className={css.cartText}>{t("navigation.titleWelcom")}</h3> */}
        {/* <section className={css.cartBtn}>
          <Link to="/catalog">
            <div className={css.buttonViews}>
              <button className={css.btnVie} type="submit">
                {t("navigation.View")}
              </button>
            </div>
          </Link>
        </section> */}
      </section>
    </div>
  );
}
