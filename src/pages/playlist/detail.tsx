import React from 'react';
import Layout from '@/layout';
import {Col, Row} from 'antd';
import {useLoaderData} from 'react-router-dom';
import DetailContent from './components/DetailContent';
import './index.less';

export default function detail() {
  const data = useLoaderData();
  return (
    <Layout>
      <div className="playlist-detail">
        <Row gutter={[16, 16]}>
          <Col span={16}>
            <DetailContent playlist={data?.playlist} />
          </Col>
          <Col span={8}></Col>
        </Row>
      </div>
    </Layout>
  );
}
