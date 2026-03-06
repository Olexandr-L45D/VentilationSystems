// CatalogGallary
import { NavLink, useSearchParams } from "react-router-dom";
import { setFilter } from "../../redux/filters/slice";
import css from "./CatalogGallary.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredByCategory } from "../../redux/filters/selectors";
import { useTranslation } from "react-i18next";
import CentrifStainless from "../../assets/images/CentrifStainless.png";
import CentrifCarbon from "../../assets/images/CentrifCarbon.png";
// import AxialFan from "../../assets/images/AxialFan.png";
import imagesValveMix from "../../assets/images/imagesValveMix.png";
import imagesValveM from "../../assets/images/imagesValveM.png";
import imagesValves from "../../assets/images/imagesValves.png";
import newHeatMod from "../../assets/images/newHeatMod.png";

export default function CatalogGallary() {
  const [params, setParams] = useSearchParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const trucks = useSelector(selectFilteredByCategory);
  // useSearchParams() повертає новий params object при кожному navigation.
  const handleCategoryClick = category => {
    const newParams = new URLSearchParams(params);

    newParams.set("category", category);

    setParams(newParams);

    dispatch(
      setFilter({
        filterName: "category",
        value: category,
      })
    );
  };
  if (!trucks || trucks.length === 0) {
    return <div>No Ventilation available</div>;
  }
  return (
    <container className={css.containerCatalog}>
      <section className={css.containerList}>
        <section className={css.cardTopBlock}>
          <ul className={css.imagesTopBlock}>
            {/* Industrial centrifugal fan stainless steel */}
            <li>
              <div
                className={css.imagesBlock}
                onClick={() => handleCategoryClick("centrifugal")}
              >
                <figure className={css.titleImg}>
                  <img src={CentrifStainless} alt="" className={css.imgLogo} />
                </figure>

                <p className={css.textImg}>{t("catalog.fanTypeSteel")}</p>
              </div>
            </li>
            <li>
              <div
                className={css.imagesBlock}
                onClick={() => handleCategoryClick("centrifugal")}
              >
                <figure className={css.titleImg}>
                  <img src={CentrifCarbon} alt="" className={css.imgLogo} />
                </figure>

                <p className={css.textImg}>{t("catalog.fanTypeCarbon")}</p>
              </div>
            </li>
            {/* Axial fan  */}

            {/* <li>
              <div
                className={css.imagesBlock}
                onClick={() => handleCategoryClick("centrifugal")}
              >
                <figure className={css.titleImg}>
                  <img src={AxialFan} alt="" className={css.imgLogo} />
                </figure>

                <p className={css.textImg}>{t("catalog.fanTypeAxial")}</p>
              </div>
            </li> */}

            <li>
              <div
                className={css.imagesBlock}
                onClick={() => handleCategoryClick("valves")}
              >
                <figure className={css.titleImg}>
                  <img src={imagesValveMix} alt="" className={css.imgLogo} />
                </figure>

                <p className={css.textImg}>{t("catalog.fanValves")}</p>
              </div>
            </li>
            {/* Different valves2*/}
            <li>
              <div
                className={css.imagesBlock}
                onClick={() => handleCategoryClick("valves")}
              >
                <figure className={css.titleImg}>
                  <img src={imagesValveM} alt="" className={css.imgLogo} />
                </figure>

                <p className={css.textImg}>{t("catalog.fanValves")}</p>
              </div>
            </li>
            {/* Different valves3*/}
            <li>
              <div
                className={css.imagesBlock}
                onClick={() => handleCategoryClick("valves")}
              >
                <figure className={css.titleImg}>
                  <img src={imagesValves} alt="" className={css.imgLogo} />
                </figure>

                <p className={css.textImg}>{t("catalog.fanValves")}</p>
              </div>
            </li>
            {/* Heat exchangers1*/}
            <li>
              <div
                className={css.imagesBlock}
                onClick={() => handleCategoryClick("heatExchanger")}
              >
                <figure className={css.titleImg}>
                  <img src={newHeatMod} alt="" className={css.imgLogo} />
                </figure>

                <p className={css.textImg}>{t("catalog.newHeat")}</p>
              </div>
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

// <section className={css.containerLeftBlock}>
//   <div className={css.titleLeftBlock}>
//     <h2 className={css.titleLeft}>{t("catalog.parameters")}</h2>
//   </div>
// </section>;
// <ol className={css.listBlLeft}>
//   <ul className={css.itemBlock}>
//     <h3 className={css.itemTitle}>{t("catalog.fan_Model")}</h3>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>BMN302</p>
//     </li>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>BMN402</p>
//     </li>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>BMN502</p>
//     </li>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>BMN552</p>
//     </li>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>BMN602</p>
//     </li>
//   </ul>
//   <ul className={css.itemBlock}>
//     <h3 className={css.itemTitle}>{t("catalog.fanTypeMaterial")}</h3>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>Galvanized steel</p>
//     </li>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>Aluminium</p>
//     </li>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>Plastic</p>
//     </li>
//   </ul>
//   <ul className={css.itemBlock}>
//     <h3 className={css.itemTitle}>{t("catalog.fanType")}</h3>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>Radial</p>
//     </li>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>Centrifugal</p>
//     </li>
//   </ul>
//   <ul className={css.itemBlock}>
//     <h3 className={css.itemTitle}>{t("catalog.fanProductivity")}</h3>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>5 - 10</p>
//     </li>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>20</p>
//     </li>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>40</p>
//     </li>
//   </ul>
//   <ul className={css.itemBlock}>
//     <h3 className={css.itemTitle}>{t("catalog.airflow")}</h3>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>Up to 300</p>
//     </li>
//   </ul>
//   <ul className={css.itemBlock}>
//     <h3 className={css.itemTitle}>{t("catalog.motorPower")}</h3>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>3</p>
//     </li>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>3.5</p>
//     </li>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>5</p>
//     </li>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>10</p>
//     </li>
//   </ul>
//   <ul className={css.itemBlock}>
//     <h3 className={css.itemTitle}>{t("catalog.noiseLevel")}</h3>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>60 dB</p>
//     </li>
//   </ul>

//   <ul className={css.itemBlock}>
//     <h3 className={css.itemTitle}>{t("catalog.rotationDirection")}</h3>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>Clockwise (CW)</p>
//     </li>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>Counterclockwise (CCW)</p>
//     </li>
//   </ul>
//   <ul className={css.itemBlock}>
//     <h3 className={css.itemTitle}>{t("catalog.overallDiameter")}</h3>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>Ø 60–110 mm</p>
//     </li>
//   </ul>
//   <ul className={css.itemBlock}>
//     <h3 className={css.itemTitle}>{t("catalog.fanWeight")}</h3>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>14 kg</p>
//     </li>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>15 kg</p>
//     </li>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>20 kg</p>
//     </li>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>30 kg</p>
//     </li>
//   </ul>
//   {/* <ul className={css.itemBlock}>
//     <h3 className={css.itemTitle}>{t("catalog.motorPoles")}</h3>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>2 poles</p>
//     </li>
//     <li className={css.itemSelect}>
//       <p className={css.itemIcons}></p>
//       <p className={css.itemText}>4 poles</p>
//     </li>
//   </ul> */}
// </ol>;
