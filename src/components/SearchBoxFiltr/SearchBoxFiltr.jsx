// import css from "./SearchBoxFiltr.module.css";
import css from "./SearchBoxFiltr.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { useSearchParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { selectFilters } from "../../redux/filters/selectors";
import { FiSearch } from "react-icons/fi";

export default function SearchBoxFiltr() {
  // const { t } = useTranslation();
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [params, setParams] = useSearchParams();

  const initialValues = {
    category: filters.category || "",
  };

  const validationSchema = Yup.object({
    category: Yup.string()
      // .required("Сategory is required")
      .min(3, "Сategory must be at least 3 characters"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    const categoryValue = values.category.trim();

    const newParams = new URLSearchParams(params.toString());
    newParams.set("category", categoryValue);
    setParams(newParams);

    dispatch(setFilter({ filterName: "category", value: categoryValue }));
    setSubmitting(false);
  };

  return (
    <div className={css.searchBarWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form className={css.formRow}>
            <div className={css.inputWrapper}>
              <FiSearch className={css.inputIcon} />
              <Field
                type="text"
                name="category"
                placeholder="Enter the category..."
                className={css.input}
              />
            </div>

            <button
              className={css.iconButton}
              type="submit"
              disabled={isSubmitting}
            >
              FIND
            </button>

            <ErrorMessage name="category" component="p" className={css.error} />
          </Form>
        )}
      </Formik>
    </div>
  );
}
