import React, { ChangeEvent } from 'react';
import { IndexModelState, ConnectRC, Loading, connect, Dispatch } from 'umi';
import { Card } from 'antd';

interface PageProps {
  index: IndexModelState;
  loading: boolean;
  dispatch: Dispatch;
}

const IndexPage: ConnectRC<PageProps> = ({ index, dispatch }) => {
  const { name } = index;
  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.value;
    // console.log(payload,'t')
    dispatch({ type: 'index/save', payload: { name } });
  };
  const style = {
    width: '400px',
    margin: '30px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    border: '1px solid #e8e8e8',
  };

  return (
    <>
      <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
        <Card.Meta
          avatar={
            <img
              alt=""
              style={{ width: '64px', height: '64px', borderRadius: '32px' }}
              src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
            />
          }
          title={name}
          description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
        />
      </Card>
      <p>
        <div>修改title </div>
        <input type="text" onChange={onchange} />
      </p>
    </>
  );
};

export default connect(
  ({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
    index,
    loading: loading.models.index,
  }),
)(IndexPage);
