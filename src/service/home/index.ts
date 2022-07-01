import request from "@/utils/request";

// 获取 banner( 轮播图 ) 数据
export const getBannerList = (type: number = 0) => {
    return request.get(`/banner?type=${type}`);
};
