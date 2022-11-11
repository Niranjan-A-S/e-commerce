import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Flyout } from "./components";
import { WishList, Cart } from "./containers";
import { HomePage, ProductDetailsPage } from "./pages";
import { store } from "./redux";



export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="cyberpunk" />} />
          <Route path="cyberpunk" element={<HomePage />}>
          <Route
              path="wishlist"
              element={<Flyout children=<WishList /> />}
            />
          <Route path="cart" element={<Flyout children=<Cart /> />} />
          </Route>
          <Route path="cyberpunk/item/:productID" element={<ProductDetailsPage />} />
          <Route path="*" element={<strong>Page not found</strong>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};