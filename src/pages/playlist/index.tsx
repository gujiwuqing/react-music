import React from 'react';
import PlayList from '@/components/PlayList';
import Layout from '@/layout';
import {useLoaderData} from 'react-router-dom';

export default function PlayListPage() {
  const data = useLoaderData();
  return (
    <Layout>
      <div>
        <PlayList result={data?.playlists || []} />
      </div>
    </Layout>
  );
}
