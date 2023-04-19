import {createBrowserRouter, createRoutesFromElements, Route,} from 'react-router-dom';
import Home from '@/pages/home';
import Rank from '@/pages/rank';
import PlayList from '@/pages/playlist';
import PlayListDetail from '@/pages/playlist/detail';
import {getPlayList, getPlayListDetail, getTopList} from '@/services/common';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/rank" element={<Rank />} loader={async ({ request }) => {
          // loaders can be async functions
          return await getTopList()
      }}></Route>
      <Route path="/playlist" element={<PlayList />} loader={async ({ request }) => {
          // loaders can be async functions
          return await getPlayList({order: "hot", cat: "全部", limit: 40, offset: 0})
      }}></Route>
      <Route path="/playlist/detail/:id" element={<PlayListDetail />} loader={async ({ params }) => {
          // loaders can be async functions
          return await getPlayListDetail({id:params.id, s: 100, timestamp: 1681097388590,})
      }}></Route>
    </>
  )
);

export default routes;
