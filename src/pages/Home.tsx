import { useNavigate } from "../hook/useNavigate";
import { Row, Col } from "../style/StyledDefaults";
import {
  Body,
  ButtonContainer,
  ButtonWrapper,
  Input,
  Popularity,
  PopularityContainer,
  SearchContainer,
  SearchTitle,
  Title,
} from "../style/StyledHome";

const Home = () => {
  const { goList, goDetailList, goDetail } = useNavigate();
  return (
    <>
      <Body>
        <Row>
          <Col>
            <Title>해몽이오</Title>
          </Col>
        </Row>
        <SearchContainer>
          <Col>
            <SearchTitle>검색</SearchTitle>
          </Col>
          <Col>
            <Input />
          </Col>
        </SearchContainer>
        <ButtonWrapper>
          <ButtonContainer>
            <PopularityContainer>
              <Popularity onClick={goList}>종류</Popularity>
            </PopularityContainer>
          </ButtonContainer>
          <ButtonContainer>
            <PopularityContainer>
              <Popularity onClick={() => goDetailList("lottery")}>
                로또 1등 담첨 꿈
              </Popularity>
            </PopularityContainer>
          </ButtonContainer>
          <ButtonContainer>
            <PopularityContainer>
              <Popularity
                onClick={() => {
                  goDetail(221);
                }}
              >
                추락하는 꿈
              </Popularity>
            </PopularityContainer>
          </ButtonContainer>
          <ButtonContainer>
            <PopularityContainer>
              <Popularity
                onClick={() => {
                  goDetail(222);
                }}
              >
                죽은 사람과 대화하는 꿈
              </Popularity>
            </PopularityContainer>
          </ButtonContainer>
        </ButtonWrapper>
      </Body>
    </>
  );
};

export default Home;
