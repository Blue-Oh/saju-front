import { useNavigate as _useNavigate } from "react-router-dom";

export const useNavigate = () => {
  const navigate = _useNavigate();
  return {
    goBack: () => navigate(-1),
    goHome: () => navigate("/"),
    goList: () => navigate(`/list`),
    goDetail: (id: number) => navigate(`/${id}`),
    goDetailList: (page: string) => navigate(`/list/${page}`),
    goSearch: (id: string) => navigate(`/search?id=${id}`),
  };
};
