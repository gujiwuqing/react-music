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


export interface SongItemDTO {
  id: string;
  name:string;
  picUrl:string;
  playCount:number;
  trackCount:number;
  trackNumberUpdateTime:number;
}


export interface SongDTO{
  category:number;
  code:number;
  hasTaste:boolean;
  result:SongItemDTO[]
}
