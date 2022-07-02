import request from "@/utils/request";
import type {BannerDTO} from '@/pages/home/HomeBanner/index.DTO';

// 获取 banner( 轮播图 ) 数据
export const GET_BANNER_LIST = (type: number = 0):Promise<BannerDTO> => {
    return request.get(`/api/banner?type=${type}`);
};
