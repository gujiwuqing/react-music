export interface BannerItemDTO {
  imageUrl: string;
  id: string;
  typeTitle: string;
  titleColor: string;
  targetType: string;
  targetId: string;
}

export interface BannerDTO {
  banners: BannerItemDTO[];
  code: number;
}
