import React, { useEffect } from "react";
import { useRequest } from "ahooks";
import { getBannerList } from "@/services/common";
import HomeBanner from "./components/HomeBanner";
export default function Home() {
  const { loading, run, data } = useRequest(getBannerList, {
    manual: true,
  });

  console.log("data", data);

  useEffect(() => {
    run();
  }, []);
  return (
    <div>
      <HomeBanner banners={data?.banners || []} />
    </div>
  );
}
