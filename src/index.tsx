import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HomePage } from "./pages";

import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HomePage />
  </Provider>
);
