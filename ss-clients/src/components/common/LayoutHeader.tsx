import React from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'umi';

const { SubMenu } = Menu;
const Header: React.FC = () => {
  return (
    <Layout.Header
      style={{
        padding: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        background: '#fff',
      }}
    >
      <Menu mode="horizontal">
        <Menu.Item key="item1">
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="item2">
          <Link to="/user/xx">使用说明</Link>
        </Menu.Item>
        <Menu.Item key="item3">
          <Link to="/user/xx">邀请码</Link>
        </Menu.Item>
        <Menu.Item key="item4">
          <Link to="/user/xx">客户端</Link>
        </Menu.Item>

        <SubMenu title="userInfo" key="g1">
          <Menu.Item key="g1-1">
            <Link to="/user">用户中心</Link>
          </Menu.Item>
          <Menu.Item key="g1-2">
            <Link to="/login">注销登录</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Layout.Header>
  );
};

export default Header;
