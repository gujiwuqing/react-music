import request from "@/utils/request";
import { AxiosResponse } from "axios";
import { PlayListVO, ArtistVO } from "./interface";

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

export const getTopList = () => {
  return request({
    url: "/toplist/detail",
    method: "GET",
  });
};

export const getArtists = (params: ArtistVO) => {
  return request({
    url: "/top/artists",
    method: "GET",
    params,
  });
};

export const getPlayListDetail = (params) => {
  return request({
    url: "/playlist/detail",
    method: "GET",
    params,
  });
};
