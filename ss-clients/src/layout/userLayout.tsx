import React, { Component } from 'react';

import { Layout, Menu } from 'antd';
import { Link } from 'umi';
import {
  MailOutlined,
  UserOutlined,
  PhoneOutlined,
  ExceptionOutlined,
} from '@ant-design/icons';
import LayoutHeader from '@/components/common/LayoutHeader';
const { Header, Footer, Sider, Content } = Layout;

const menus = [
  {
    title: '我的信息',
    groups: [
      { link: '/user/userinfo', avc: UserOutlined, text: '用户中心' },
      { link: '/user/announcement', avc: MailOutlined, text: '查看公告' },
      { link: '/user/tickets', avc: PhoneOutlined, text: '联系站长' },
    ],
  },
  {
    title: '节点相关',
    groups: [
      { link: '/user/ssList', avc: ExceptionOutlined, text: '节点信息' },
      { link: '/user/xx', avc: ExceptionOutlined, text: '流量信息' },
    ],
  },
  {
    title: '交易相关',
    groups: [
      { link: '/user/xx', avc: ExceptionOutlined, text: '捐赠付费' },
      { link: '/user/xx', avc: ExceptionOutlined, text: '重置界面' },
      { link: '/user/xx', avc: ExceptionOutlined, text: '商品界面' },
      { link: '/user/xx', avc: ExceptionOutlined, text: '购买记录' },
    ],
  },
  {
    title: '邀请相关',
    groups: [
      { link: '/user/xx', avc: ExceptionOutlined, text: '邀请返利' },
      { link: '/user/xx', avc: ExceptionOutlined, text: '返利记录' },
    ],
  },
  {
    title: '管理面板',
    groups: [
      { link: '/user/xx', avc: ExceptionOutlined, text: '数据后台' },
      { link: '/user/xx', avc: ExceptionOutlined, text: '网站后台' },
    ],
  },
];

function renderAVC(avc: React.ElementType) {
  const AVC = avc;
  return <AVC />;
}

export default class UserLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{ minHeight: '100vh' }} collapsed={false}>
          <div
            style={{
              height: '32px',
              background: 'rgba(255,255,255,.2)',
              margin: '16px',
            }}
          />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {menus.map((group, index) => {
              return (
                <Menu.ItemGroup key={`g-${index}`} title={group.title}>
                  {group.groups.map((item, iteId) => {
                    return (
                      <Menu.Item key={`g-${index}-${iteId}`}>
                        <Link to={item.link}>
                          {renderAVC(item.avc)}
                          {item.text}
                        </Link>
                      </Menu.Item>
                    );
                  })}
                </Menu.ItemGroup>
              );
            })}
          </Menu>
        </Sider>
        <Layout>
          <LayoutHeader />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                background: '#fff',
                minHeight: 360,
                maxHeight: 'calc(100vh - 160px)',
                overflowY: 'scroll',
              }}
            >
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Designed ©2019 Created by wagnxx
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
