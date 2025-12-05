import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const TruckFeatures = lazy(() => import("../TruckFeatures/TruckFeatures"));
// const TruckReviews = lazy(() => import("../TruckReviews/TruckReviews"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));

const VentPageFilters = lazy(() =>
  import("../../pages/VentPageFilters/VentPageFilters")
);

const TruckDetalsPage = lazy(() =>
  import("../../pages/TruckDetalsPage/TruckDetalsPage")
);
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));

import { Layout } from "../Layout/Layout";
import { CartProvider } from "../CartProvider";
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const AboutFactoryPage = lazy(() =>
  import("../../pages/AboutFactoryPage/AboutFactoryPage")
);

const FeedbackForm = lazy(() => import("../FeedbackForm/FeedbackForm"));

export default function App() {
  return (
    <CartProvider>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<VentPageFilters />} />
            <Route path="/factory" element={<AboutFactoryPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/feedbackEmail" element={<FeedbackForm />} />
            <Route path="/catalog/:id" element={<TruckDetalsPage />}>
              <Route path="features" element={<TruckFeatures />} />
              {/* <Route path="reviews" element={<TruckReviews />} /> */}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </CartProvider>
  );
}
