import "./index.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<DetailPage type="films" />} />
        <Route path="/person/:id" element={<DetailPage type="people" />} />
      </Route>
    </Routes>
  );
};

export default App;
