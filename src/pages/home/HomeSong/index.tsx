import React, {useEffect, useState} from 'react';
import {GET_PERSONALIZED_LIST} from '@/service/home';
import type {SongItemDTO} from '@/service/home/index.DTO';
import styles from './index.less'
import {getCount} from '@/utils'

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
      <div className='mb-4 text-xl'>推荐歌单</div>
      <div className='grid grid-cols-8 gap-6'>
        {
          list.map(item => {
            return (
              <div className='relative cursor-pointer'>
                <img src={item?.picUrl} alt=""/>
                <div className='truncate'>{item?.name}</div>
                <div className={styles.count}>
                  <i className={styles.arrow}></i>
                  <span>{getCount(item.playCount)}</span>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default HomeSong;
