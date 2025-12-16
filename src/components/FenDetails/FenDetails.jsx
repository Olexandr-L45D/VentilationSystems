// FenDetails.module.css
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import css from "./FenDetails.module.css";
import { GoArrowLeft } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FenDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const items = useSelector(state => state.campers.items);

  const fen = items.find(item => String(item.id) === id);

  if (!fen) return <p>Товар не знайдено</p>;

  return (
    <div className={css.container}>
      <h1>{fen.name}</h1>
      <p className={css.itemText}>Price: {fen.price} €</p>
      <p className={css.itemText}>Price Vat: {fen.price_VAT} €</p>
      <p className={css.itemText}>{fen.category}</p>
      <p className={css.itemText}>{fen.subcategory}</p>
      <p className={css.itemText}>{fen.subcategory_2}</p>
      <p className={css.itemText}>{fen.productivity}</p>
      <p className={css.itemText}>{fen.power_kw}</p>
      <p className={css.itemText}>{fen.width}</p>
      <p className={css.itemText}>{fen.height}</p>
      <p className={css.itemText}>{fen.weight}</p>
      <p className={css.itemText}>{fen.material}</p>
      <button className={css.buttonIcon}>
        <GoArrowLeft className={css.icons} />
        <NavLink className={css.linkGo} to="/catalog">
          {t("navigation.go_Catalog")}
        </NavLink>
      </button>
    </div>
  );
};

export default FenDetails;
