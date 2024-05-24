import styled from "styled-components";
import { Col } from "./StyledDefaults";
import { TypeBarFill } from "../type/types";
import { Body as HomeBody } from "./StyledHome";

export const Desc = styled(Col)`
  color: #fff;
  font-weight: 600;
  font-size: 1.3em;
`;

export const BarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
`;

export const Label = styled.span`
  width: 60px;
  text-align: center;
  margin-right: 10px;
  font-size: 1rem;
  color: #fff;
  background-color: #595959;
  border-radius: 30px;
  padding: 5px 0;
`;

export const Body = styled(HomeBody)`
  flex-grow: 1;
`;

export const Bar = styled.div`
  flex: 1;
  height: 30px;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

export const BarFill = styled.div<TypeBarFill>`
  height: 100%;
  width: ${(props: any) => props.width * 2}0%;
  background-color: ${(props) => props.color};
  transition: width 0.5s;
`;

export const Footer = styled(Col)`
  padding: 0 20px;
`;
