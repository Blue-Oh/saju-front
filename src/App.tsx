import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./pages/Home";
import List from "./pages/List";
import DetailList from "./pages/DetailList";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/list/:id" element={<DetailList />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
};

export default App;
