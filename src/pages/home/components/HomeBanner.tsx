import React from "react";
import { Carousel } from "antd";
interface HomeBannerProps {
  banners: any[];
}
export default function HomeBanner({ banners }: HomeBannerProps) {
  console.log("banners", banners);
  return (
    <Carousel style={{ width: "100%" }}>
      {banners.map((item) => {
        return (
          <div key={item.targetId} style={{ width: 300 }}>
            <img src={item.imageUrl} alt="" width={300} />
          </div>
        );
      })}
    </Carousel>
  );
}
