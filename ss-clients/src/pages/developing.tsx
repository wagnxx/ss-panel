import React from 'react';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Link } from 'umi';

export default () => (
  <Result
    icon={<SmileOutlined />}
    title="项目正在开发中,请稍后~~"
    extra={
      <Button>
        {' '}
        <Link to="/">去首页看看</Link>
      </Button>
    }
  />
);
