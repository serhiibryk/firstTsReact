import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";

import { menuList } from "../../utils";

const { Header: HeaderAnt } = Layout;

const Header = () => {
  const nav = useNavigate();
  return (
    <HeaderAnt>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["/"]}
        items={menuList}
        onClick={(path) => nav(path.key)}
      />
    </HeaderAnt>
  );
};

export default Header;
