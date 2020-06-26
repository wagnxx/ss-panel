import React, { Component, useState } from 'react';

import { Layout, Menu } from 'antd';
import { Link } from 'umi';
import { PieChartFilled, DashboardFilled } from '@ant-design/icons';
import LayoutHeader from '@/components/common/LayoutHeader';
const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

interface PageProps {
  children?: React.ReactChildren;
}

const BasicLayout: React.FC<PageProps> = props => {
  const [collapsed, changeCollapsedState] = useState(false);

  return (
    <Layout>
      <Sider width={256} style={{ minHeight: '100vh' }} collapsed={collapsed}>
        <div
          style={{
            height: '32px',
            background: 'rgba(255,255,255,.2)',
            margin: '16px',
          }}
          onClick={() => changeCollapsedState(!collapsed)}
        />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/puzzelecards">
              <PieChartFilled />
              <span>puzzelecards</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <DashboardFilled />
                <span>Dashboard</span>
              </span>
            }
          >
            <Menu.Item key="2">
              <Link to="/dashboard/analysis">分析页</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/dashboard/monitor">监控页</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/dashboard/workplace">工作台</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <LayoutHeader />

        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ background: '#fff', minHeight: 360 }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Designed ©2019 Created by wagnxx
        </Footer>
      </Layout>
    </Layout>
  );
};
export default BasicLayout;
