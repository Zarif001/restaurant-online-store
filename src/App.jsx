// App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/MainPage/MainPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import CartPage from "./pages/CartPage/CartPage";
import { fetchDates, cartFetchDates, putFetchingData } from "./store/action";
import { ThreeCircles } from "react-loader-spinner";
import AboutPage from "./pages/AboutPage/AboutPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import ContactPage from "./pages/ContactPage/ContactPage";

const router = createBrowserRouter([
  {path: '/', element: <Main/>},
  {path: '/menu', element: <MenuPage/>},
  {path: '/cart', element: <CartPage/>},
  {path: '/about', element: <AboutPage/>},
  {path: '/gallery', element: <GalleryPage/>},
  {path: '/contact', element: <ContactPage/>}
])
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

  if (status === "loading")
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
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
