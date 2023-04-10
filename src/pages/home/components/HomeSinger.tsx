import React, { useEffect } from "react";
import { useRequest } from "ahooks";
import BaseTitle from "@/components/BaseTitle";
import { getArtists } from "@/services/common";
import { Row, Col, Avatar, Spin } from "antd";

export default function HomeSinger() {
  const { data, run, loading } = useRequest(getArtists, {
    manual: true,
  });

  useEffect(() => {
    run({
      offset: 0,
      limit: 30,
    });
  }, []);
  return (
    <div>
      {loading ? (
        <div className="example">
          <Spin />
        </div>
      ) : (
        <div className="mt-10">
          <BaseTitle title="推荐歌手" />
          <Row gutter={[16, 16]} className="mt-10">
            {data?.artists &&
              data.artists.map((artist) => {
                return (
                  <Col
                    span={3}
                    className="flex flex-col justify-center items-center"
                  >
                    <Avatar src={artist.picUrl} size={90} />
                    <span className="mt-2">{artist.name}</span>
                    <span className="mt-2 text-[#fa2800]">
                      单曲数{artist.musicSize}
                    </span>
                  </Col>
                );
              })}
          </Row>
        </div>
      )}
    </div>
  );
}
