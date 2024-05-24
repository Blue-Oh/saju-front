import { Col as AntdCol, Row as AntdRow } from "antd";
import { RightOutlined as AntdRightOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const Col = styled(AntdCol)``;

export const Row = styled(AntdRow)``;

export const Card = styled(Col)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 20px 15px;
  cursor: pointer;
`;

export const Title = styled(Col)`
  font-weight: 600;
`;

export const RightOutlined = styled(AntdRightOutlined)``;

export const Wrapper = styled(Col)`
  padding: 10px;
  margin: 0 auto;
  width: 100%;
`;

export const IconContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
`;
