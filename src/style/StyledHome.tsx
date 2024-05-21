import styled from "styled-components";
import { Row, Col } from "./StyledDefaults";
import { Input as AntdInput } from "antd";

const { Search } = AntdInput;

export const Body = styled(Col)`
  margin: 20px auto;
  padding: 0 20px;
  width: 100%;
  max-width: 500px;
`;

export const PopularityContainer = styled(Col)`
  width: 60%;
`;

export const SearchContainer = styled(Col)`
  margin-bottom: 1.5rem;
`;

export const Popularity = styled(Col)`
  background-color: #a8e0ff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
  margin-top: 10px;
  font-weight: 600;
`;

export const Input = styled(Search)``;

export const Title = styled(Col)`
  font-size: 3rem;
  color: #fff;
  font-weight: 700;
  margin-bottom: 10rem;
`;

export const SearchTitle = styled(Col)`
  font-size: 1.2rem;
  color: #fff;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ButtonWrapper = styled(Col)`
  float: right;
  width: 100%;
`;

export const ButtonContainer = styled(Row)`
  justify-content: end;
`;
