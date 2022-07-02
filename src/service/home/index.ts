import request from '@/utils/request';
import type {BannerDTO, SongDTO} from '@/service/home/index.DTO';

// 获取 banner( 轮播图 ) 数据
export const GET_BANNER_LIST = (type: number = 0): Promise<BannerDTO> => {
  return request.get(`/api/banner?type=${type}`);
};

export const GET_PERSONALIZED_LIST = (limit: number = 24):Promise<SongDTO> => {
  return request.get(`/api/personalized?limit=${limit}`);
};
