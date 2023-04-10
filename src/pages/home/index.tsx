import React, { useEffect } from "react";
import { useRequest } from "ahooks";
import { getBannerList, getPersonalized } from "@/services/common";
import HomeBanner from "./components/HomeBanner";
import Layout from "@/layout";
import HomePlayList from "./components/HomePlayList";
import HomeSinger from "./components/HomeSinger";
export default function Home() {
  const { loading, run, data } = useRequest(getBannerList, {
    manual: true,
  });

  const { run: playListRun, data: playListData } = useRequest(getPersonalized, {
    manual: true,
  });

  useEffect(() => {
    run();
    playListRun();
  }, []);
  return (
    <Layout>
      <div>
        <HomeBanner banners={data?.banners || []} />
        <HomePlayList result={playListData?.result || []} />
        <HomeSinger />
      </div>
    </Layout>
  );
}
