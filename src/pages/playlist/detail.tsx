import React, { useEffect } from "react";
import Layout from "@/layout";
import { useRequest } from "ahooks";
import { getPlayListDetail } from "@/services/common";
import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import DetailContent from "./components/DetailContent";
import "./index.less";
export default function detail() {
  let { id } = useParams();
  const { run, data, loading } = useRequest(getPlayListDetail, {
    manual: true,
  });

  useEffect(() => {
    run({
      id,
      s: 100,
      timestamp: 1681097388590,
    });
  }, []);
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
