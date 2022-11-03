import { store } from "../app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";
import { Cart, WishList } from "../containers";
import { Flyout } from "../components";

export const Paths = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="cyberpunk" />} />
          <Route path="cyberpunk" element={<HomePage />}>
            {/* <Route path="wishlist" element={<WishList />} /> */}
            <Route
              path="wishlist"
              element={<Flyout children=<WishList /> />}
            />
            {/* <Route path="cart" element={<Cart />} /> */}
            <Route path="cart" element={<Flyout children=<Cart /> />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
