import React from 'react';
import Layout from '@/layout';
import BaseTitle from '@/components/BaseTitle';
import PlayList from '@/components/PlayList';
import {useLoaderData} from 'react-router-dom';

export default function Rank() {
  const data = useLoaderData();
  return (
    <Layout>
      <div>
        <BaseTitle title="云音乐特色榜" />
        <PlayList result={data?.list ? data?.list?.splice(0, 4) : []} />
        <div className="h-10"></div>
        <BaseTitle title="全球媒体榜" />
        <PlayList
            result={
              data?.list ? data?.list?.splice(0, data?.list.length) : []
            }
        />
      </div>
    </Layout>
  );
}
