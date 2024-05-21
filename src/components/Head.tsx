import { useNavigate } from "../hook/useNavigate";
import {
  AntdHeader,
  HomeOutlined,
  LeftOutlined,
  Title,
} from "../style/StyledHeader";

const Header = ({ title }: { title: string }) => {
  const { goBack, goHome } = useNavigate();
  return (
    <>
      <AntdHeader>
        <LeftOutlined onClick={goBack} />
        <Title>{title}</Title>
        <HomeOutlined onClick={goHome} />
      </AntdHeader>
    </>
  );
};

export default Header;
