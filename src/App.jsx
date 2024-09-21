import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/MainPage/MainPage";
import { fetchDates, cartFetchDates, putFetchingData } from "./store/action";
import { ThreeCircles } from "react-loader-spinner";

const MenuPage = lazy(() => import("./pages/MenuPage/MenuPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage/GalleryPage"));
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage/ContactPage"));

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  {
    path: "/cart",
    element: (
      <Suspense fallback={<div>Loading Menu...</div>}>
        <CartPage />
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<div>Loading Menu...</div>}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<div>Loading Menu...</div>}>
        <ContactPage />
      </Suspense>
    ),
  },
  {
    path: "/menu",
    element: (
      <Suspense fallback={<div>Loading Menu...</div>}>
        <MenuPage />
      </Suspense>
    ),
  },
  {
    path: "/gallery",
    element: (
      <Suspense fallback={<div>Loading Gallery...</div>}>
        <GalleryPage />
      </Suspense>
    ),
  },
]);

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.products.cartItems);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchDates());
    dispatch(cartFetchDates());
  }, [dispatch]);

  useEffect(() => {
    if (cartItems.length > 0) {
      dispatch(putFetchingData(cartItems));
    }
  }, [cartItems, dispatch]);

  if (status === "loading") {
    return (
      <div className="loader">
        <ThreeCircles
          visible={true}
          height="500px"
          width="100%"
          color="rgb(239, 102, 2)"
          ariaLabel="puff-loading"
        />
      </div>
    );
  }

  return <RouterProvider router={router} />;
}

export default App;
