import routes from "@/router";
import ReactDOM from "react-dom/client";
import {
  RouterProvider
} from "react-router-dom";
import "./index.less";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={routes} />
);
