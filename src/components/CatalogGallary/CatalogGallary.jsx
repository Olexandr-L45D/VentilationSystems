// CatalogGallary
import { NavLink } from "react-router-dom";

import css from "./CatalogGallary.module.css";

import { useSelector } from "react-redux";
import { selectFilteredByCategory } from "../../redux/filters/selectors";
import { useTranslation } from "react-i18next";

export default function CatalogGallary() {
  const { t } = useTranslation();
  const trucks = useSelector(selectFilteredByCategory);
  if (!trucks || trucks.length === 0) {
    return <div>No Ventilation available</div>; // Відобразіть це, якщо дані ще не завантажені
  }
  return (
    <section className={css.containerList}>
      <ul className={css.list}>
        {trucks.map(truck => (
          <li key={truck.id} className={css.cartItem}>
            <article className={css.cartContainer}>
              <figure className={css.imgCard}>
                <img
                  className={css.images}
                  src={truck.photo}
                  alt={truck.name}
                />
                <h2 className={css.titles}>{truck.name}</h2>
              </figure>
              <button className={css.buttonIconShowe}>
                <NavLink className={css.btnShowe} to={`/fen/${truck.id}`}>
                  {t("navigation.show_more")}
                </NavLink>
              </button>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
//
//
// {
//     "id": 1,
//     "category": "axial",
//     "subcategory": "household",
//     "subcategory_2": "A100",
//     "name": "Axial Fan A200",
//     "price": 180,
//     "price_VAT": 216,
//     "motor_type": "biphasic",
//     "weight": "14kg",
//     "productivity": 5,
//     "power_kw": 3,
//     "width": 45,
//     "height": 55,
//     "img": "https://drive.google.com/file/d/1iLcAe_CQlF7Pv2jm8zpcMYh-fUWHOCp6/view?usp=sharing",
//     "img2": "",
//     "img3": "",
//     "pdf": "",
//     " Noise_level": 52,
//     "Static_pressure": "",
//     "Efficiency": "",
//     "material": "plastic",
//     "IP_class": "IP44"
// }
