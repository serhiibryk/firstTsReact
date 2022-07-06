import { Layout } from "antd";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";
import Teams from "./pages/Teams";
import ToDo from "./pages/ToDo";

const { Content } = Layout;

const App = () => (
  <Layout className="layout">
    <BrowserRouter>
      <Header />
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="teams" element={<Teams />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  </Layout>
);

export default App;
