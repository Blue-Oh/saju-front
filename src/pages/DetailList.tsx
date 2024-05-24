import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { getList } from "../api/getList";
import { Wrapper, Title, RightOutlined, Card } from "../style/StyledDefaults";
import { useLocation } from "react-router-dom";
import { useNavigate } from "../hook/useNavigate";

const DetailList = () => {
  const { goDetail } = useNavigate();
  const [list, setList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const ctg = location.pathname.replace("/list/", "");
    getList(ctg).then((res: any) => {
      setList(res);
    });
  }, []);

  return (
    <>
      <Layout title="리스트">
        <Wrapper>
          {list.map((v: any, i) => {
            return (
              <Card key={i} onClick={() => goDetail(v.id)}>
                <Title>{v.title}</Title>
                <RightOutlined />
              </Card>
            );
          })}
        </Wrapper>
      </Layout>
    </>
  );
};

export default DetailList;
