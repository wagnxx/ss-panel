import React from 'react';
import PannelHeader from '@/components/PanneHeader';
import { Table, Button, Tag, Modal } from 'antd';

const developingWarning = () => {
  Modal.warning({
    title: '温馨提示',
    content: '功能正在开发中,请稍后~~',
  });
  return false;
};

interface ISource {
  id: string;
  date: string;
  title: string;
  status: string;
  key?: string;
}
const columns = [
  {
    title: '操作',
    dataIndex: '',
    key: 'x',
    render: () => (
      <>
        <Button type="primary" onClick={developingWarning}>
          查看
        </Button>
        <Button
          type="primary"
          onClick={developingWarning}
          danger
          style={{ margin: 'auto 8px' }}
        >
          删除
        </Button>
      </>
    ),
  },
  {
    title: 'ID',
    dataIndex: 'id',
    // width: '30%',
    editable: true,
  },
  {
    title: '时间',
    dataIndex: 'date',
  },
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '状态',
    dataIndex: 'status',
    render: (tags: string) => (
      <>
        {
          <Tag color={tags.length > 5 ? 'geekblue' : 'green'} key={tags}>
            {tags}
          </Tag>
        }
        {/* {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
          
          );
        })} */}
      </>
    ),
  },
];

let dataSource: ISource[] = [
  {
    id: '1345678888886444fr',
    date: '2020.6.21 8:33',
    title: '工单1',
    status: 'online',
  },
  {
    id: '1345678888886444fer',
    date: '2020.5.21 8:33',
    title: '工单2',
    status: 'offline',
  },
];
dataSource = dataSource.map((item, index) => {
  item.key = index + item.id;
  return item;
});
const sendOrder = (event: MouseEvent) => {
  console.log(event?.target);
  developingWarning();
};

const Page: React.FC = () => (
  <div className="userInfo-page">
    <PannelHeader
      message="工单系统："
      description="有什么问题尽管提！什么时候解决就不知道了！"
    />
    <Table
      columns={columns}
      dataSource={dataSource}
      title={() => (
        <div>
          公告记录:
          {dataSource.length > 0 ? '' : <h2>暂时还没发出公告</h2>}
        </div>
      )}
      footer={() => (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="ghost" danger onClick={e => sendOrder(e)}>
            发起工单
          </Button>
        </div>
      )}
    />
  </div>
);

export default Page;
