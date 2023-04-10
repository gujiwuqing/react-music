export interface bannerItem {
  id: string;
}

export interface BannerDTO {
  banners: bannerItem[];
}

export interface PlayListItemDTO {
  id: number;
  playCount: number;
  trackCount: number;
  trackNumberUpdateTime: number;
  type?: number;
  commentCount?: number;
  name: string;
  picUrl?: string;
  coverImgUrl?: string;
  coverImgId?: string;
  coverImgId_str?: string;
  coverStatus?: number;
  alg: string;
  copywriter?: string;
  canDislike?: boolean;
  highQuality?: boolean;
}

export interface PlayListVO {
  order: string;
  cat: string;
  limit: number;
  offset: number;
}

export interface ArtistVO {
  limit: number;
  offset: number;
}
