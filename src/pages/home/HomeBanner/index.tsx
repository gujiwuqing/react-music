import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {GET_BANNER_LIST} from '@/service/home';
import type {BannerItemDTO} from '@/pages/home/HomeBanner/index.DTO';

const HomeBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  const [list, setList] = useState<BannerItemDTO[]>([]);
  const getBannerList = async () => {
    const {banners} = await GET_BANNER_LIST();
    setList([...banners])
  };

  useEffect(() => {
    getBannerList();
  }, []);
  return (
    <div>
      <Slider {...settings}>
        {
          list.map(item => {
            return (
              <img src={item.imageUrl} alt="" key={item.id}/>
            );
          })
        }
      </Slider>
    </div>
  );
};
export default HomeBanner;
