import request from "@/utils/request";
import { AxiosResponse } from "axios";
import { PlayListVO } from "./interface";

export const getBannerList = (type = 0) => {
  return request({
    url: "/banner",
    method: "GET",
    params: {
      type,
    },
  });
};
export const getPersonalized = (limit = 24) => {
  return request({
    url: "/personalized",
    method: "GET",
    params: {
      limit,
    },
  });
};

export const getPlayList = (params: PlayListVO) => {
  return request({
    url: "/top/playlist",
    method: "GET",
    params,
  });
};
