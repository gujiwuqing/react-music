import { PlayListItemDTO } from "@/services/common/interface";
import { Row, Col } from "antd";
import { getCount } from "@/utils";
import BaseTitle from "@/components/BaseTitle";
import { useNavigate } from "react-router-dom";
interface HomePlayListProps {
  result: PlayListItemDTO[];
}
export default function HomeLPayList({ result }: HomePlayListProps) {
    const navigate = useNavigate();
    const goJump = (id: number) => {
        navigate(`/playlist/detail/${id}`);
    };
  return (
    <div className="mt-10">
      <BaseTitle title="推荐歌单" />
      <Row gutter={[24, 24]} className="mt-5">
        {result.map((item) => {
          return (
            <Col
                key={item.id}
                span={3}
                 className="cursor-pointer"
                 onClick={() => {
                goJump(item.id);
            }}>
              <div className="relative">
                <img src={item.picUrl} alt="" />
                <div className="absolute right-2 top-0 text-white">
                  {getCount(item.playCount)}
                </div>
              </div>
              <div className="overflow-line font-bold mt-3">{item.name}</div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
