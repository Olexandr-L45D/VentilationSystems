import css from "./SearchBoxFiltr.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { useSearchParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
import { selectFilters } from "../../redux/filters/selectors";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const ALL_CATEGORIES = ["centrifugal", "axial", "Radial", "Duct"];

export default function SearchBoxFiltr() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [params, setParams] = useSearchParams();
  // const navigate = useNavigate();

  const [suggestions, setSuggestions] = useState(ALL_CATEGORIES);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1); // ⬅️ для ↑ ↓

  const initialValues = {
    category: filters.category || "",
  };

  // const validationSchema = Yup.object({
  //   category: Yup.string().min(3, "Category must be at least 3 characters"),
  // });

  return (
    <div className={css.searchBarWrapper}>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values, { setSubmitting, setFieldError }) => {
          const categoryValue = values.category.trim();
          if (!categoryValue) return;

          const newParams = new URLSearchParams(params.toString());
          newParams.set("category", categoryValue);
          setParams(newParams);

          dispatch(setFilter({ filterName: "category", value: categoryValue }));

          const exists = ALL_CATEGORIES.some(
            cat => cat.toLowerCase() === categoryValue.toLowerCase()
          );

          if (!exists) {
            setFieldError(
              "category",
              "No such category. Please choose from the list."
            );
          }

          setShowDropdown(false);
          setActiveIndex(-1);
          setSubmitting(false);
        }}
      >
        {({ setFieldValue, submitForm }) => (
          <Form className={css.formRow}>
            <div className={css.inputWrapper}>
              <FiSearch className={css.inputIcon} />

              <Field
                type="text"
                name="category"
                autoComplete="off"
                placeholder="Select category..."
                className={css.input}
                onFocus={() => {
                  setSuggestions(ALL_CATEGORIES);
                  setShowDropdown(true);
                }}
                onChange={e => {
                  const value = e.target.value;
                  setFieldValue("category", value);

                  const filtered = ALL_CATEGORIES.filter(cat =>
                    cat.toLowerCase().includes(value.toLowerCase())
                  );

                  setSuggestions(filtered);
                  setShowDropdown(true);
                  setActiveIndex(-1);
                }}
                onKeyDown={e => {
                  if (!showDropdown || suggestions.length === 0) return;

                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActiveIndex(i =>
                      i < suggestions.length - 1 ? i + 1 : 0
                    );
                  }

                  if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActiveIndex(i =>
                      i > 0 ? i - 1 : suggestions.length - 1
                    );
                  }

                  if (e.key === "Enter" && activeIndex >= 0) {
                    e.preventDefault();
                    setFieldValue("category", suggestions[activeIndex]);
                    setShowDropdown(false);
                    submitForm(); // ⬅️ ВАЖЛИВО
                  }
                }}
              />

              {showDropdown && suggestions.length > 0 && (
                <ul className={css.dropdown}>
                  {suggestions.map((cat, index) => (
                    <li
                      key={cat}
                      className={index === activeIndex ? css.activeOption : ""}
                      onMouseEnter={() => setActiveIndex(index)}
                      onClick={() => {
                        setFieldValue("category", cat);
                        setShowDropdown(false);
                        submitForm(); // ⬅️ submit по кліку
                      }}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <ErrorMessage name="category" component="p" className={css.error} />
          </Form>
        )}
      </Formik>
    </div>
  );
}

// import css from "./SearchBoxFiltr.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { setFilter } from "../../redux/filters/slice";
// import {  useSearchParams } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { selectFilters } from "../../redux/filters/selectors";
// import { FiSearch } from "react-icons/fi";
// // import { useState } from "react";

// // ⬇️ Тимчасово: список існуючих категорій
// // const ALL_CATEGORIES = [
// //   "Ventilation",
// //   "Fans",
// //   "Fen",
// //   "Air",
// //   "Axial",
// //   "Radial",
// //   "Centrifugal",
// // ];

// export default function SearchBoxFiltr() {
//   // const { t } = useTranslation();
//   const dispatch = useDispatch();
//   const filters = useSelector(selectFilters);
//   const [params, setParams] = useSearchParams();
//   // const [suggestions, setSuggestions] = useState(ALL_CATEGORIES);
//   // const [showDropdown, setShowDropdown] = useState(false);
//   // const navigate = useNavigate();

//   const initialValues = {
//     category: filters.category || "",
//   };

//   const validationSchema = Yup.object({
//     category: Yup.string()
//       // .required("Сategory is required")
//       .min(3, "Сategory must be at least 3 characters"),
//   });

//   const handleSubmit = (values, { setSubmitting }) => {
//     const categoryValue = values.category.trim();
//     if (!categoryValue) return;
//     const newParams = new URLSearchParams(params.toString());
//     newParams.set("category", categoryValue);
//     setParams(newParams);

//     dispatch(setFilter({ filterName: "category", value: categoryValue }));

//     setSubmitting(false);
//   };

//   return (
//     <div className={css.searchBarWrapper}>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//         enableReinitialize
//       >
//         {() => (
//           <Form className={css.formRow}>
//             <div className={css.inputWrapper}>
//               <FiSearch className={css.inputIcon} />
//               <Field
//                 type="text"
//                 name="category"
//                 placeholder="Enter the category..."
//                 className={css.input}
//               />
//             </div>

//             <ErrorMessage name="category" component="p" className={css.error} />
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

//
//
// export default function SearchBoxFiltr() {
//   // const { t } = useTranslation();
//   const dispatch = useDispatch();
//   const filters = useSelector(selectFilters);
//   const [params, setParams] = useSearchParams();

//   const initialValues = {
//     category: filters.category || "",
//   };

//   const validationSchema = Yup.object({
//     category: Yup.string()
//       // .required("Сategory is required")
//       .min(3, "Сategory must be at least 3 characters"),
//   });

//   const handleSubmit = (values, { setSubmitting }) => {
//     const categoryValue = values.category.trim();

//     const newParams = new URLSearchParams(params.toString());
//     newParams.set("category", categoryValue);
//     setParams(newParams);

//     dispatch(setFilter({ filterName: "category", value: categoryValue }));
//     setSubmitting(false);
//   };

//   return (
//     <div className={css.searchBarWrapper}>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//         enableReinitialize
//       >
//         {({ isSubmitting }) => (
//           <Form className={css.formRow}>
//             <div className={css.inputWrapper}>
//               <FiSearch className={css.inputIcon} />
//               <Field
//                 type="text"
//                 name="category"
//                 placeholder="Enter the category..."
//                 className={css.input}
//               />
//             </div>

//             <button
//               className={css.iconButton}
//               type="submit"
//               disabled={isSubmitting}
//             >
//               {/* FIND */}
//               {/* {t("navigation.find")} */}
//             </button>

//             <ErrorMessage name="category" component="p" className={css.error} />
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// ✅ Редіректити тільки якщо введене слово НЕ існує в каталозі

// ✅ Запобігти помилкам вводу через:

// випадаючий список (autocomplete / suggestions)

// показ усіх доступних категорій одразу

// ✅ Перший візит → список вже доступний

// ✅ LocalStorage (історія пошуку) — залишаємо
