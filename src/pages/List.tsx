import { Key, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getCategoryList } from "../api/getCategoryList";
import { Col, IconContainer, Wrapper } from "../style/StyledDefaults";
import { CategoryWrapper, Name, svgComponents } from "../style/StyledList";
import { useNavigate } from "../hook/useNavigate";

const List = () => {
  const { goDetailList } = useNavigate();
  const [categoryList, setCategoryList] = useState<any[]>([]);

  useEffect(() => {
    getCategoryList().then((res: any) => {
      const result = [];
      for (let i = 0; i < res.length; i += 3) {
        result.push(res.slice(i, i + 3));
      }
      setCategoryList(result);
    });
  }, []);

  return (
    <>
      <Layout title="종류">
        <Wrapper>
          {categoryList.map((v, i) => (
            <CategoryWrapper key={i}>
              {v.map((val: any, idx: number) => {
                const SVGComponent = svgComponents[val.category];
                return (
                  <IconContainer
                    span={4}
                    key={idx}
                    onClick={() => {
                      goDetailList(val.category);
                    }}
                  >
                    <SVGComponent />
                    <Name>{val.label}</Name>
                  </IconContainer>
                );
              })}
            </CategoryWrapper>
          ))}
        </Wrapper>
      </Layout>
    </>
  );
};

export default List;
