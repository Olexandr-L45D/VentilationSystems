import css from "./VentPageFilters.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTruck } from "../../redux/campers/operations";
import { selectPage } from "../../redux/campers/selectors";
import Loader from "../../components/Loader/Loader";
import SearchBoxFiltr from "../../components/SearchBoxFiltr/SearchBoxFiltr";
import { selectFilters } from "../../redux/filters/selectors";
import { useSearchParams } from "react-router-dom";
// import ButtonLoadMore from "../../components/ButtonLoadMore/ButtonLoadMore";
import { setChangeFilter } from "../../redux/filters/slice";
import AllVentList from "../../components/AllVentList/AllVentList";

export default function VentPageFilters() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.campers.loading);
  const filteres = useSelector(selectFilters);
  const page = useSelector(selectPage);
  const [params, setParams] = useSearchParams();

  // Об'єднаний useEffect
  useEffect(() => {
    const existingFilters = Object.fromEntries(params.entries());
    // Якщо URL містить параметри, а Redux-параметри порожні
    if (!Object.keys(filteres).length && Object.keys(existingFilters).length) {
      console.log("Initializing Redux with existing filters:", existingFilters);
      // dispatch(setChangeFilter(existingFilters)); // Синхронізація Redux з URL
      dispatch(setChangeFilter({ category: "" })); // Синхронізація Redux з URL { category: "" }
      return;
    }
    // Оновлення URL при зміні фільтрів
    const newParams = new URLSearchParams(params.toString());
    Object.entries(filteres).forEach(([key, value]) => {
      if (value) newParams.set(key, value);
      else newParams.delete(key);
    });

    if (newParams.toString() !== params.toString()) {
      console.log("Updated URL params:", newParams.toString());
      setParams(newParams);
      console.log("URL Params:", params);
    }
  }, [params, filteres, dispatch, setParams]);

  // Завантаження товарів версія - яка працює наразі
  useEffect(() => {
    if (page === 1) {
      dispatch(fetchAllTruck({ page }));
    }
  }, [dispatch, page, filteres]);

  return (
    <div className={css.cartAll}>
      <SearchBoxFiltr />
      {isLoading ? <Loader /> : <AllVentList />}
    </div>
  );
}
