import React, {useEffect, useState} from 'react';
import {GET_BANNER_LIST} from '@/service/home';
import type {BannerItemDTO} from '@/service/home/index.DTO';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay,Pagination} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const HomeBanner = () => {
  const [list, setList] = useState<BannerItemDTO[]>([]);
  const getBannerList = async () => {
    const {banners} = await GET_BANNER_LIST();
    setList([...banners]);
  };

  useEffect(() => {
    getBannerList();
  }, []);
  return (
    <div>
      <Swiper
        modules={[Autoplay,Pagination]}
        autoplay
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        className='pb-6'
      >
        {
          list.map(item => {
            return (
              <SwiperSlide>
                <img src={item.imageUrl} alt="" key={item.id} style={{margin: '0 10px', padding: '2%'}}/>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </div>
  );
};
export default HomeBanner;
