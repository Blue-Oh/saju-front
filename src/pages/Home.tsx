import { Row, Col } from "./style/StyledDefaults";
import {
  Body,
  ButtonContainer,
  ButtonWrapper,
  Input,
  Popularity,
  SearchTitle,
  Title,
} from "./style/StyledHome";

const Home = () => {
  return (
    <>
      <Body>
        <Row>
          <Col>
            <Title>해몽이올시다</Title>
          </Col>
        </Row>
        <Col>
          <Col>
            <SearchTitle>검색</SearchTitle>
          </Col>
          <Col>
            <Input />
          </Col>
        </Col>
        <ButtonWrapper>
          <ButtonContainer>
            <Col>
              <Popularity>로또 1등 담첨 꿈</Popularity>
            </Col>
          </ButtonContainer>
          <ButtonContainer>
            <Col>
              <Popularity>추락하는 꿈</Popularity>
            </Col>
          </ButtonContainer>
          <ButtonContainer>
            <Col>
              <Popularity>죽은 사람과 대화하는 꿈</Popularity>
            </Col>
          </ButtonContainer>
        </ButtonWrapper>
      </Body>
    </>
  );
};

export default Home;
