import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import Home from "@/pages/home";
import Rank from "@/pages/rank";
import PlayList from "@/pages/playlist";
import { lazy } from "react";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/rank" element={<Rank />}></Route>
      <Route path="/playlist" element={<PlayList />}></Route>
    </>
  )
);

export default routes;
