import React from 'react';
import PannelHeader from '@/components/PanneHeader';
import {
  Row,
  Col,
  Card,
  Space,
  Button,
  Statistic,
  Form,
  Tooltip,
  Input,
} from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const WhiteSpaceUD = ({ style }: { style?: object }) => (
  <div style={{ margin: '20px 0', ...style }}></div>
);
export default () => (
  <div className="userInfo-page">
    <PannelHeader message="用户中心：" description="这里有你的出生证明...s" />
    <Row gutter={[16, 16]}>
      {/* // 左边 */}
      <Col span={12}>
        <Card>
          <h2 style={{ fontSize: '2em' }}>欢迎小主: admin1</h2>

          <Space direction="horizontal">
            <Button>注销登录</Button>
            <Button>修改密码</Button>
            <Button>切换端口</Button>
          </Space>

          <WhiteSpaceUD style={{ borderTop: '1px solid #ddd' }} />
          <Form>
            <Form.Item>
              <Form.Item
                name="username"
                noStyle
                rules={[{ required: true, message: 'Username is required' }]}
              >
                <Input style={{ width: 160 }} placeholder="更换页面主题" />
              </Form.Item>
              <Button type="primary" style={{ margin: '0 8px' }}>
                提交
              </Button>
            </Form.Item>
            <Form.Item>
              <Form.Item
                name="passMethod"
                noStyle
                rules={[{ required: true, message: '更换加密方式' }]}
              >
                <Input style={{ width: 160 }} placeholder="更换加密方式" />
              </Form.Item>
              <Button type="primary" style={{ margin: '0 8px' }}>
                提交
              </Button>
            </Form.Item>

            <Form.Item>
              <Form.Item
                name="password"
                noStyle
                rules={[{ required: true, message: '更换ss密码' }]}
              >
                <Input style={{ width: 160 }} placeholder="更换ss密码" />
              </Form.Item>
              <Button type="primary" style={{ margin: '0 8px' }}>
                提交
              </Button>
            </Form.Item>
          </Form>
          <WhiteSpaceUD style={{ borderTop: '1px solid #ddd' }} />
          <p>今天还没有签到，点一下可以获得10.0MB~200.0MB流量</p>
          <WhiteSpaceUD />
          <Button>签到</Button>
        </Card>
        <WhiteSpaceUD />
        <Card title="最新公告">
          <p>暂无公告</p>
          <p></p>
        </Card>
      </Col>
      {/* // 右边 */}
      <Col span={12}>
        <Card title="链接信息">
          <ul>
            <li>
              <span>端口:</span> <span>1025</span>
            </li>
            <li>
              <span>密码:</span> <span>PUrJnuIubu11</span>
            </li>
            <li>
              <span>加密:</span> <span>aes-2560cfb</span>
            </li>
            <li>
              <span>UUID:</span> <span>31xxxxxxxxxxxxdkkkkkkkk</span>
            </li>
            <Button type="primary">订阅地址</Button>
          </ul>
        </Card>
        <WhiteSpaceUD />

        <Card title="流量信息">
          {/* <ul>
            <li>总量: 5.0G</li>
            <li>剩余: 5.0G</li>
            <li>使用: 0.0G</li>
          </ul> */}
          <Row>
            <Col span={8}>
              {' '}
              <Statistic
                title="总量"
                value={'5.0 G'}
                valueStyle={{ color: '#3f8600' }}
              />
            </Col>
            <Col span={8}>
              {' '}
              <Statistic
                title="使用"
                value={'75k'}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
              />
            </Col>
            <Col span={8}>
              <Statistic
                title="剩余"
                value={'5.0 G'}
                valueStyle={{ color: '#3f8600' }}
              />
            </Col>
          </Row>
        </Card>
        <WhiteSpaceUD />
        <Card title="个人信息">
          <ul>
            <li>
              <span>余额:</span> <span>0.00元</span>
            </li>
            <li>
              <span>邮箱:</span> <span>admin@ss.com</span>
            </li>
            <li>
              <span>状态:</span> <span>0 级</span>
            </li>
            <li>
              <span>主题:</span> <span>default</span>
            </li>
            <li>
              <span>等级到期时间:</span> <span>2020年5月30日 07:20</span>
            </li>
            <li>
              <span>上次登录时间:</span> <span>2020年6月5日 22:25</span>
            </li>
          </ul>
        </Card>
      </Col>
    </Row>
  </div>
);
