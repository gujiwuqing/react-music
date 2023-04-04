import React, { useEffect } from "react";
import { useRequest } from "ahooks";
import { getPlayList } from "@/services/common";
import PlayList from "@/components/PlayList";
import Layout from "@/layout";
export default function PlayListPage() {
  const { loading, run, data } = useRequest(getPlayList, {
    manual: true,
  });

  useEffect(() => {
    run({ order: "hot", cat: "全部", limit: 40, offset: 0 });
  }, []);
  return (
    <Layout>
      <div>
        <PlayList result={data?.playlists || []} />
      </div>
    </Layout>
  );
}
