import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const AboutUsPage = lazy(() => import("../../pages/AboutUsPage/AboutUsPage"));

const VentPageFilters = lazy(() =>
  import("../../pages/VentPageFilters/VentPageFilters")
);

const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

import { Layout } from "../Layout/Layout";
import { CartProvider } from "../CartProvider";
import DeliveryPage from "../../pages/DeliveryPage/DeliveryPage";

const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const AboutFactoryPage = lazy(() =>
  import("../../pages/AboutFactoryPage/AboutFactoryPage")
);

const FeedbackEmailModal = lazy(() =>
  import("../FeedbackEmailModal/FeedbackEmailModal")
);

const FeedbackModalPhone = lazy(() =>
  import("../FeedbackModalPhone/FeedbackModalPhone")
);
const FenDetails = lazy(() => import("../FenDetails/FenDetails"));

export default function App() {
  return (
    <CartProvider>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/catalog" element={<VentPageFilters />} />
            <Route path="/factory" element={<AboutFactoryPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/feedbackEmail" element={<FeedbackEmailModal />} />
            <Route path="/feedbackPhone" element={<FeedbackModalPhone />} />
            <Route path="/fen/:id" element={<FenDetails />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </CartProvider>
  );
}

// DeliveryPage
// const TruckFeatures = lazy(() => import("../TruckFeatures/TruckFeatures"));
// const TruckReviews = lazy(() => import("../TruckReviews/TruckReviews"));
// const TruckDetalsPage = lazy(() =>
//   import("../../pages/TruckDetalsPage/TruckDetalsPage")
// );

/* <Route path="/catalog/:id" element={<TruckDetalsPage />}>
              <Route path="features" element={<TruckFeatures />} />
              <Route path="reviews" element={<TruckReviews />} />
            </Route> */
