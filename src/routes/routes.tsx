import { store } from "../redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";
import { Cart, WishList } from "../containers";

export const Paths = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="cyberpunk" />} />
          <Route path="cyberpunk" element={<HomePage />}>
            <Route path="wishlist" element={<WishList />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
