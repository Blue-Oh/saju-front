import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { getList } from "../api/getList";
import { Wrapper, Title, RightOutlined, Card } from "../style/StyledDefaults";
import { useLocation } from "react-router-dom";
import { useNavigate } from "../hook/useNavigate";
import { getSearchData } from "../api/getSearchData";

const Search = () => {
  const [title, setTitle] = useState<string>("");
  const { goDetail } = useNavigate();
  const [list, setList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const t = decodeURIComponent(location.search.replace("?id=", ""));
    setTitle(t);
    getSearchData(t).then((res: any) => {
      setList(res);
    });
  }, []);

  return (
    <>
      <Layout title={title}>
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

export default Search;
