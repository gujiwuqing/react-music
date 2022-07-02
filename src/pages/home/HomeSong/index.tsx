import React, {useEffect, useState} from 'react';
import {GET_PERSONALIZED_LIST} from '@/service/home';
import type {SongItemDTO} from '@/service/home/index.DTO';

const HomeSong = () => {
  const [list, setList] = useState<SongItemDTO[]>([]);
  const getList = async () => {
    const {result} = await GET_PERSONALIZED_LIST();
    setList([...result]);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <div>推荐歌单</div>
      <div className='grid grid-cols-8 gap-6'>
        {
          list.map(item => {
            return (
              <div>
                <img src={item?.picUrl} alt=""/>
                <div>{item?.name}</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default HomeSong;
