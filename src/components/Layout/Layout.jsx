import css from "./Layout.module.css";

import { Suspense } from "react";
import { Header } from "../Header/Header";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import Bakground from "../../assets/images/blendBakground.png";

export const Layout = ({ children }) => {
  return (
    <div
      className={css.container}
      style={{ backgroundImage: `url(${Bakground})` }}
    >
      <Header />
      <Navigation />
      <Suspense fallback={null}>{children}</Suspense>
      <Footer />
    </div>
  );
};
