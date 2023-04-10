import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import Home from "@/pages/home";
import Rank from "@/pages/rank";
import PlayList from "@/pages/playlist";
import PlayListDetail from "@/pages/playlist/detail";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/rank" element={<Rank />}></Route>
      <Route path="/playlist" element={<PlayList />}></Route>
      <Route path="/playlist/detail/:id" element={<PlayListDetail />}></Route>
    </>
  )
);

export default routes;
