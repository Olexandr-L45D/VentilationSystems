import { NavLink } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import css from "./AllVentList.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { selectFilteredByCategory } from "../../redux/filters/selectors";
import { FcFlashAuto } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import { FcSupport } from "react-icons/fc";
import { FcSoundRecordingCopyright } from "react-icons/fc";
import { FcElectroDevices } from "react-icons/fc";
import PdfActions from "../ButtonExportPdf/ButtonExportPdf";

export default function AllVentList() {
  const { t } = useTranslation();
  // Використовуємо мемоізований селектор а саме Селектор фільтрації вантажівок за локацією
  const trucks = useSelector(selectFilteredByCategory);
  if (!trucks || trucks.length === 0) {
    return <div>No Ventilation available</div>; // Відобразіть це, якщо дані ще не завантажені
  }
  return (
    <div className={css.containerList}>
      <ul className={css.list}>
        {trucks.map(truck => (
          <li key={truck.id} className={css.cartItem}>
            <article className={css.cartContainer}>
              <figure className={css.imgCard}>
                <h2 className={css.titles}>{truck.name}</h2>
                <img
                  className={css.images}
                  src={truck.photo}
                  alt={truck.name}
                />
              </figure>

              <section className={css.cartComent}>
                <div className={css.titlesblok}>
                  {/* <h2 className={css.titles}>{truck.name}</h2> */}
                  <p className={css.textPrice}>Price, € :&nbsp;{truck.price}</p>
                  <p className={css.textPrice}>
                    Price Vat, € :&nbsp;{truck.price_VAT}
                  </p>
                </div>

                <section className={css.descripBloc}>
                  <ul className={css.descripList}>
                    <li className={css.descripItem}>
                      <svg className={css.iconhed}>
                        {/* <use href={`${sprite}#icon-star`} /> */}
                      </svg>
                      <span className={css.loched}>
                        <strong>Category :&nbsp;</strong>
                        {truck.category}
                      </span>
                    </li>
                    <li className={css.descripItem}>
                      <svg className={css.iconhed}>
                        <use href={`${sprite}#icon-city`} />
                      </svg>
                      <span className={css.loched}>
                        <strong>Subcategory :&nbsp; </strong>
                        {truck.subcategory}
                      </span>
                    </li>
                    <li className={css.descripItem}>
                      <svg className={css.iconhed}>
                        <FcElectroDevices />
                      </svg>
                      <span className={css.loched}>
                        <strong> Model :&nbsp; </strong>
                        {truck.subcategory_2}
                      </span>
                    </li>
                  </ul>
                </section>

                <p className={css.textDescr}>
                  <strong>Characteristics :&nbsp; </strong>
                  <strong>
                    В цьому параграфі пропоную вказати ключові характеристики -
                    критеріїї вибору споживача товару{" "}
                  </strong>
                  {/* {truck.subcategory_2} */}
                </p>

                <ul className={css.featuresList}>
                  <li className={css.featuresItem}>
                    <svg className={css.icon}>
                      <FcFlashAuto />
                    </svg>
                    <strong>Motor type :&nbsp; </strong>
                    <strong>
                      {truck.motor_type.charAt(0).toUpperCase() +
                        truck.motor_type.slice(1)}
                    </strong>
                  </li>
                  <li className={css.featuresItem}>
                    <svg className={css.icon}>
                      <FcSoundRecordingCopyright />
                    </svg>
                    <strong>Productivity :&nbsp; </strong> {truck.productivity}
                  </li>
                </ul>
                <ul className={css.featuresList}>
                  <li className={css.featuresItemAc}>
                    <svg className={css.icon}>
                      <FcSupport />
                    </svg>
                    <strong>Power/kw :&nbsp; </strong> {truck.power_kw}
                  </li>
                  <li className={css.featuresItemAc}>
                    <svg className={css.icon}>
                      <FcInTransit />
                    </svg>
                    <strong>Weight :&nbsp; </strong> {truck.weight}
                  </li>
                </ul>
                <div className={css.containerButtons}>
                  <button className={css.buttonIconShowe}>
                    <NavLink
                      className={css.btnShowe}
                      to={`/catalog/${truck.id}`}
                    >
                      {t("navigation.show_more")}
                    </NavLink>
                  </button>
                  <div className={css.buttonIconBlok}>
                    <button className={css.buttonIcon}>
                      {/* <GoArrowLeft className={css.icons} /> */}
                      <PdfActions
                        viewUrl="/pdfs/mnItalvent_1.pdf"
                        downloadUrl="/pdfs/mnItalvent_1.pdf"
                      />
                    </button>
                  </div>
                </div>
              </section>
            </article>
          </li>
        ))}
      </ul>
    </div>
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
