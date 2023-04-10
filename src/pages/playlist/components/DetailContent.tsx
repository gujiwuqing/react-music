import { Button, Table } from "antd";
import React from "react";

export default function DetailContent(props: any) {
  const columns = [
    // {
    //   title: "序号",
    //   dataIndex: "index",
    //   key: "index",
    // },
    {
      title: "歌曲",
      dataIndex: "name",
      key: "name",
      render: (_, row) => (
        <div>
          <span>{_}</span>
        </div>
      ),
    },
    {
      title: "歌手",
      dataIndex: "ar",
      key: "ar",
      render: (_, row) => <span>{row.ar[0].name}</span>,
    },
    {
      title: "专辑",
      dataIndex: "al",
      key: "al",
      render: (_, row) => <span>{row.al.name}</span>,
    },
    {
      title: "时长",
      dataIndex: "dt",
      key: "dt",
    },
  ];
  return (
    <div>
      <div className="flex mb-10">
        <div className="avatar">
          <img
            src={props?.playlist?.coverImgUrl}
            alt=""
            style={{ width: 200 }}
          />
        </div>
        <div className="info">
          <h2 className="font-bold text-2xl">{props.playlist?.name}</h2>
          <div className="flex mt-6 mb-6 items-center">
            <img
              src={props?.playlist?.creator?.avatarUrl}
              alt=""
              style={{ width: 30, borderRadius: "50%" }}
            />
            <span className="ml-2 mr-10">
              {props?.playlist?.creator?.nickname}
            </span>
            <span>{props?.playlist?.createTime}</span>
          </div>
          <div>{props?.playlist?.description}</div>
        </div>
      </div>
      <div>
        <div className="flex justify-end">
          <Button className="mr-4">播放全部</Button>
          <Button>收藏</Button>
        </div>
        <Table
          columns={columns}
          dataSource={props?.playlist?.tracks || []}
          className="mt-3"
        />
      </div>
    </div>
  );
}
