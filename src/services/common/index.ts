import request from "@/utils/request";
import { AxiosResponse } from "axios";

interface bannerItem {
  id: string;
}

interface BannerDTO {
  banners: bannerItem[];
}
export const getBannerList = (type = 0): Promise<AxiosResponse<BannerDTO>> => {
  return request({
    url: "/banner",
    method: "GET",
    params: {
      type,
    },
  });
};
