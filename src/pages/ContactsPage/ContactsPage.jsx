// ContactsPage
import { AiFillPhone } from "react-icons/ai";
import css from "./ContactsPage.module.css";
import { useTranslation } from "react-i18next";

export default function ContactsPage() {
  const { t, ready } = useTranslation();
  if (!ready) {
    return <div>Loading translations...</div>;
  }
  return (
    <div className={css.container}>
      <section className={css.card}>
        <h1 className={css.cartTitle}>{t("navigation.titleHome")}</h1>
        <h1 className={css.cartTitle}>CONTACTS</h1>
        <h3 className={css.cartText}>
          <p className={css.iconLogo}>ITALVENT</p>
        </h3>
        <h3 className={css.cartText}>
          <p className={css.text}>Via Marco Corner nr2</p>
        </h3>
        <h3 className={css.cartText}>
          <AiFillPhone /> +3904451716513
        </h3>
        <h3 className={css.cartText}>Em: info@italvent.com</h3>
        <h3 className={css.cartText}>36016 Thiene (VI)</h3>
        <h3 className={css.cartText}>p.iva 02947610248</h3>
        <h3 className={css.cartText}>
          Per richiedere informazioni sui nostri prodotti e novità, compilate e
          inviate il modulo. Sarà nostra cura rispondervi al più presto.
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
