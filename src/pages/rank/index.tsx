import React, { useEffect } from "react";
import Layout from "@/layout";
import BaseTitle from "@/components/BaseTitle";
import { useRequest } from "ahooks";
import { getTopList } from "@/services/common";
import PlayList from "@/components/PlayList";
import { Spin } from "antd";
export default function Rank() {
  const { data, run, loading } = useRequest(getTopList, {
    manual: true,
  });

  console.log("data", data);

  useEffect(() => {
    run();
  }, []);
  return (
    <Layout>
      <div>
        {loading ? (
          <div className="example">
            <Spin />
          </div>
        ) : (
          <>
            <BaseTitle title="云音乐特色榜" />
            <PlayList result={data?.list ? data?.list?.splice(0, 4) : []} />
            <div className="h-10"></div>
            <BaseTitle title="全球媒体榜" />
            <PlayList
              result={
                data?.list ? data?.list?.splice(0, data?.list.length) : []
              }
            />
          </>
        )}
      </div>
    </Layout>
  );
}
