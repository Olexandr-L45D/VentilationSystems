// ContactsPage
import { AiFillPhone } from "react-icons/ai";
import css from "./ContactsPage.module.css";
import { useTranslation } from "react-i18next";
import ContactMapModal from "../../components/ContactMapModal/ContactMapModal";

export default function ContactsPage() {
  const { t, ready } = useTranslation();
  if (!ready) {
    return <div>Loading translations...</div>;
  }
  return (
    <section className={css.container}>
      <section className={css.card}>
        <h1 className={css.cartTitle}>{t("navigation.titleHome")}</h1>
        <h1 className={css.cartTitle}>CONTACTS</h1>
        <h3 className={css.cartText}>
          <p className={css.iconLogo}>ITALVENT</p>
        </h3>
        <h3 className={css.cartText}>
          <p className={css.text}>
            Via Marco Corner, 2, 36016 Quarta Zona Industriale Artigianale VI,
            Italy
          </p>
        </h3>
        <ContactMapModal />
        <h3 className={css.cartText}>
          <AiFillPhone /> +3904451716513
        </h3>
        <h4 className={css.cartText}>Em: info@italvent.com</h4>
        <h4 className={css.cartText}>36016 Thiene (VI)</h4>
        <h4 className={css.cartText}>p.iva 02947610248</h4>
        <h4 className={css.cartText}>Director ...........</h4>
        <h4 className={css.cartText}>Administration ...........</h4>
        <h4 className={css.cartText}>
          Sarà nostra cura rispondervi al più presto.
        </h4>
      </section>
    </section>
  );
}
