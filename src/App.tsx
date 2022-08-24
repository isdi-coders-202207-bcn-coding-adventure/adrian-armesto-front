import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";

const App = (): JSX.Element => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/register" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

export default App;
