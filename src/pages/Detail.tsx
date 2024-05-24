import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";
import { getDetail } from "../api/getDetail";
import { Interpretation } from "../type/types";
import {
  Desc,
  Bar,
  BarFill,
  BarContainer,
  Label,
  Footer,
  Body,
} from "../style/StyledDetail";

const Detail = () => {
  const [interpretation, setInterpretation] = useState<Interpretation>({
    id: 0,
    title: "",
    description: "",
    symbol: "",
    길: 0,
    흉: 0,
    화: 0,
    복: 0,
  });
  const location = useLocation();
  useEffect(() => {
    const id = location.pathname.replace("/", "");
    getDetail(id).then((res: any) => {
      setInterpretation(res);
    });
  }, []);
  return (
    <>
      <Layout title={interpretation.title}>
        <Body>
          <Desc>{interpretation.description}</Desc>
        </Body>
        <Footer>
          <BarContainer>
            <Label>길</Label>
            <Bar>
              <BarFill width={interpretation.길} color={"#8B0000"} />
            </Bar>
          </BarContainer>
          <BarContainer>
            <Label>흉</Label>
            <Bar>
              <BarFill width={interpretation.흉} color={"#D2B48C"} />
            </Bar>
          </BarContainer>
          <BarContainer>
            <Label>화</Label>
            <Bar>
              <BarFill width={interpretation.화} color={"#32CD32"} />
            </Bar>
          </BarContainer>
          <BarContainer>
            <Label>복</Label>
            <Bar>
              <BarFill width={interpretation.복} color={"#CD5C5C"} />
            </Bar>
          </BarContainer>
        </Footer>
      </Layout>
    </>
  );
};

export default Detail;
