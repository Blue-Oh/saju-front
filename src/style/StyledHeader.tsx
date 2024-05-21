import { Layout } from "antd";
import styled from "styled-components";
import { Col } from "./StyledDefaults";
import {
  HomeOutlined as AntdHomeOutlined,
  LeftOutlined as AntdLeftOutlined,
} from "@ant-design/icons";
const { Header } = Layout;

export const AntdHeader = styled(Header)`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled(Col)`
  color: #fff;
  font-weight: 700;
  font-size: 1.2rem;
`;

export const HomeOutlined = styled(AntdHomeOutlined)`
  cursor: pointer;
  & > svg {
    height: 1.4rem;
    width: 1.4rem;
  }
`;

export const LeftOutlined = styled(AntdLeftOutlined)`
  cursor: pointer;
  & > svg {
    height: 1.4rem;
    width: 1.4rem;
  }
`;
