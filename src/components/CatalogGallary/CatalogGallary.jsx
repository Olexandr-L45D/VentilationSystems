// CatalogGallary
import { NavLink } from "react-router-dom";
import css from "./CatalogGallary.module.css";
import { useSelector } from "react-redux";
import { selectFilteredByCategory } from "../../redux/filters/selectors";
import { useTranslation } from "react-i18next";
import CentrifStainless from "../../assets/images/CentrifStainless.png";
import CentrifCarbon from "../../assets/images/CentrifCarbon.png";
import AxialFan from "../../assets/images/AxialFan.png";

export default function CatalogGallary() {
  const { t } = useTranslation();
  const trucks = useSelector(selectFilteredByCategory);
  if (!trucks || trucks.length === 0) {
    return <div>No Ventilation available</div>; // Відобразить це повідомлення, якщо дані ще не завантажені
  }
  return (
    <container className={css.containerCatalog}>
      <section className={css.containerLeftBlock}>
        <div className={css.titleLeftBlock}>
          <h2 className={css.titleLeft}>Parameters</h2>
        </div>
        <ol className={css.listBlLeft}>
          <ul className={css.itemBlock}>
            <h3 className={css.itemTitle}>Fan Model (series)</h3>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>BMN202</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>BMN252</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>BMN302</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>BMN402</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>BMN502</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>BMN554</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>BMN602</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>BMN604</p>
            </li>
          </ul>

          <ul className={css.itemBlock}>
            <h3 className={css.itemTitle}>Fan Model (series)</h3>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>BMN202</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>BMN252</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>BMN302</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>BMN402</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>BMN502</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>BMN554</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>BMN602</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>BMN604</p>
            </li>
          </ul>

          <ul className={css.itemBlock}>
            <h3 className={css.itemTitle}>Motor Power, kW</h3>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>009</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>018</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>025</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>0.37</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>0.55</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>1.1</p>
            </li>
          </ul>

          <ul className={css.itemBlock}>
            <h3 className={css.itemTitle}>Number of Motor Poles</h3>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>2 poles</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>4 poles</p>
            </li>
          </ul>

          <ul className={css.itemBlock}>
            <h3 className={css.itemTitle}>Airflow Capacity, m³/h</h3>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>Up to 300</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>300-600</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>600-1200</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>1200-2000</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>2000-3000</p>
            </li>
          </ul>

          <ul className={css.itemBlock}>
            <h3 className={css.itemTitle}>Motor Power, kW</h3>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>Up to 300 Pa</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>300-600 Pa</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>600-900 Pa</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>900-1500 Pa</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>1500-2000 Pa</p>
            </li>
          </ul>

          <ul className={css.itemBlock}>
            <h3 className={css.itemTitle}>Noise Level, dB(A)</h3>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>50–60 dB</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>60–70 dB</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>70–80 dB</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>80+ dB</p>
            </li>
          </ul>
          <ul className={css.itemBlock}>
            <h3 className={css.itemTitle}>Rotation Direction</h3>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>Clockwise (CW)</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>Counterclockwise (CCW)</p>
            </li>
          </ul>
          <ul className={css.itemBlock}>
            <h3 className={css.itemTitle}>Overall Diameter</h3>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>Ø 60–110 mm</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>Ø 110–160 mm</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>Ø 160–250 mm</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>Ø 250+ mm</p>
            </li>
          </ul>
          <ul className={css.itemBlock}>
            <h3 className={css.itemTitle}>Fan Weight, kg</h3>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>Up to 5 kg</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>5–10 kg</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>10–15 kg</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>15+ kg</p>
            </li>
          </ul>
          <ul className={css.itemBlock}>
            <h3 className={css.itemTitle}>Fan Type</h3>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>Radial</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>Duct</p>
            </li>
            <li className={css.itemSelect}>
              <p className={css.itemIcons}></p>
              <p className={css.itemText}>Centrifugal</p>
            </li>
          </ul>
        </ol>
      </section>
      <section className={css.containerList}>
        <section className={css.cardTopBlock}>
          <ul className={css.imagesTopBlock}>
            <li className={css.imagesBlock}>
              <figure className={css.titleImg}>
                <img src={CentrifStainless} alt="" className={css.imgLogo} />
              </figure>
              <p className={css.textImg}>
                Industrial centrifugal fan stainless steel
              </p>
            </li>
            <li className={css.imagesBlock}>
              <figure className={css.titleImg}>
                <img src={CentrifCarbon} alt="" className={css.imgLogo} />
              </figure>
              <p className={css.textImg}>
                Industrial centrifugal fan carbon steel
              </p>
            </li>
            <li className={css.imagesBlock}>
              <figure className={css.titleImg}>
                <img src={AxialFan} alt="" className={css.imgLogo} />
              </figure>
              <p className={css.textImg}>Axial fan</p>
            </li>
          </ul>
        </section>
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
                    <h3 className={css.titles}>{truck.name}</h3>
                  </figure>
                  <div className={css.buttonIconShowe}>
                    <NavLink className={css.btnShowe} to={`/fen/${truck.id}`}>
                      {t("navigation.show_more")}
                    </NavLink>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </container>
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
//     "photo": "https://drive.google.com/file/d/1iLcAe_CQlF7Pv2jm8zpcMYh-fUWHOCp6/view?usp=sharing",
//     "img2": "",
//     "img3": "",
//     "pdf": "",
//     " Noise_level": 52,
//     "Static_pressure": "",
//     "Efficiency": "",
//     "material": "plastic",
//     "IP_class": "IP44"
// }
