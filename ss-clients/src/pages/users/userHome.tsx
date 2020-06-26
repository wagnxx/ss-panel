import React from 'react';
import { Table, Form, Row, Col, Card, Button } from 'antd';
import PannelHeader from '@/components/PanneHeader';
import { Link } from 'umi';
interface ColItemProps {
  t1: string;
  t2: string;
  bgcolor?: string;
}
const ColItem = ({ t1, t2, bgcolor = '#f14668' }: ColItemProps) => {
  return (
    <Col xxl={5} lg={6} md={12} sm={24}>
      <div style={{ backgroundColor: bgcolor, color: '#fff', padding: '10px' }}>
        <p style={{ fontSize: '1.6em' }}>{t1}</p>
        <p style={{ fontSize: '1.6em' }}>{t2}</p>
      </div>
    </Col>
  );
};

const CardHeader = () => (
  <>
    <h2>
      {' '}
      <span style={{ fontSize: '1.8em' }}>欢迎小主: admin1 </span>
      <br />
      点击下方按钮进入用户中心
    </h2>
  </>
);

const Page: React.FC = () => (
  <div className="userInfo-page">
    <PannelHeader
      message="工单系统："
      description="有什么问题尽管提！什么时候解决就不知道了！"
    />
    <Row gutter={[16, 16]}>
      <ColItem t1="好像发现了一个" t2="了不到的地方!" />
      <ColItem t1="是啊是啊" t2="要进去瞧瞧吗?" bgcolor="#48c774" />
      <ColItem t1="当然要去" t2="魔王总要救公主" bgcolor="#3273dc" />
    </Row>
    <Card title={<CardHeader />}>
      <Button type="primary" ghost>
        <Link to="/user/userinfo">进入</Link>
      </Button>
    </Card>
  </div>
);

export default Page;
