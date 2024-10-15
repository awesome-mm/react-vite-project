import App from "./App.jsx";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import store from "./store/main";

import "./styles/reset.css";
import "./styles/common.css";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import "@/styles/Pretendard-font.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
