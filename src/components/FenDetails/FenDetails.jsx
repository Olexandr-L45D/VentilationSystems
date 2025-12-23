// FenDetails.module.css
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "./FenDetails.module.css";
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const FenDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const items = useSelector(state => state.campers.items);

  const fen = items.find(item => String(item.id) === id);

  if (!fen) return <p>Not product avilable</p>;

  return (
    <container className={css.containerList}>
      <h1 className={css.titles}>{fen.name}</h1>
      <section key={fen.id} className={css.cartItem}>
        {/* <h1 className={css.titles}>{fen.name}</h1> */}
        <figure className={css.imgCard}>
          <img className={css.images} src={fen.photo} alt={fen.name} />
        </figure>

        <section className={css.cartContainer}>
          <ul className={css.cartComent}>
            <li className={css.descrip}>
              <strong>Fan type:&nbsp; </strong> {fen.fen_type}
            </li>
            <li className={css.descrip}>
              <strong>Aplication:&nbsp; </strong> {fen.aplication}
            </li>
            <li className={css.descrip}>
              <strong>Airflow capacity:&nbsp; </strong> {fen.airflow_cap}
            </li>
            <li className={css.descrip}>
              <strong>Maximum pressure:&nbsp; </strong> {fen.max_pressure}
            </li>
            <li className={css.descrip}>
              <strong>Motor power:&nbsp; </strong> {fen.power_kw}
            </li>
            <li className={css.descrip}>
              <strong>Nois level:&nbsp; </strong> {fen.nois_level}
            </li>
            <li className={css.descrip}>
              <strong>Impeller material:&nbsp; </strong> {fen.material}
            </li>

            <li className={css.descrip}>
              <strong>Operation temperature:&nbsp; </strong>
              {fen.temperature}
            </li>
            <li className={css.descrip}>
              <strong>Weight:&nbsp; </strong> {fen.weight}
            </li>
            <li className={css.descrip}>
              <strong>Rotation direction:&nbsp; </strong>
              {fen.rotation_direction}
            </li>
          </ul>
        </section>
      </section>

      <button className={css.buttonIcon}>
        <GoArrowLeft className={css.icons} />
        <NavLink className={css.linkGo} to="/catalog">
          {t("navigation.go_Catalog")}
        </NavLink>
      </button>
      <section className={css.containerSecind}>
        <h2 className={css.titleDescr}>Description</h2>
        <h3 className={css.schemeTitle}>
          <strong className={css.schemeTitle}>{/* Subtitle :&nbsp; */}</strong>
          {fen.subtitle}
        </h3>
        <p className={css.moreDescrip}>{fen.description}</p>
        <h2 className={css.schemeTitle}>Scheme</h2>
        <figure className={css.imgCheme}>
          <img className={css.imag} src={fen.scheme} alt={fen.scheme} />
        </figure>
        <h2 className={css.schemeTitle}>Table</h2>
        <figure className={css.imgCheme}>
          <img className={css.imag} src={fen.table} alt={fen.table} />
        </figure>
      </section>
      <ScrollToTopButton />
    </container>
  );
};

export default FenDetails;

{
  /* <li className={css.featuresItem}>
  <strong>Motor type :&nbsp; </strong>
  <strong>
    {fen.motor_type.charAt(0).toUpperCase() + fen.motor_type.slice(1)}
  </strong>
</li>; */
}
