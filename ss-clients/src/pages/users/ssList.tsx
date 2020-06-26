import React from 'react';
import PannelHeader from '@/components/PanneHeader';
import { Table, Collapse, Tag, Tabs, Row, Col, Modal } from 'antd';
import { DashOutlined } from '@ant-design/icons';
const Panel = Collapse.Panel;
function callback(key: any) {
  console.log(key);
}

const CollapsePannelHeader = () => {
  return (
    <>
      <Tag color="#87d068">ss</Tag>
      <Tag color="green">在线</Tag>
      <strong color="volcano">ss-a3</strong>
    </>
  );
};
const CollapsePannelHeaderExtra = () => {
  return (
    <>
      <span color="#87d068">地区:</span>
      <span
        style={{
          backgroundColor: 'red',
          width: '10px',
          height: '10px',
          borderRadius: '100%',
          display: 'inline-block',
          margin: 'auto 14px auto 4px',
        }}
      ></span>
      <DashOutlined />
    </>
  );
};

const Styles = {
  tabSub: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderTop: '1px solid #ddd',
    paddingTop: '16px',
    cursor: 'pointer',
  },
};

const developingWarning = () => {
  Modal.warning({
    title: '温馨提示',
    content: '功能正在开发中,请稍后~~',
  });
  return false;
};

const Page: React.FC = () => (
  <div className="userInfo-page">
    <PannelHeader message="节点信息" description="来啊伤害呀!" />
    <Collapse onChange={callback}>
      <Panel
        header={<CollapsePannelHeader />}
        key="1"
        showArrow={false}
        extra={<CollapsePannelHeaderExtra />}
      >
        <p>节点名: ss-a3</p>
        <Row>
          <Col span={8}>
            <div style={Styles.tabSub} onClick={developingWarning}>
              二维码
            </div>
          </Col>
          <Col span={8}>
            <div style={Styles.tabSub} onClick={developingWarning}>
              节点信息
            </div>
          </Col>
          <Col span={8}>
            <div style={Styles.tabSub} onClick={developingWarning}>
              用户组
            </div>
          </Col>
        </Row>
      </Panel>
    </Collapse>
    ,
  </div>
);

export default Page;
