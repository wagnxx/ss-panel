import React from 'react';
import { Alert } from 'antd';

interface PageProps {
  message: string;
  description: string;
  type?: 'success' | 'info' | 'warning' | 'error';
}
const Header: React.FC<PageProps> = ({
  message,
  description,
  type = 'info',
}) => (
  <Alert
    message={message}
    description={description}
    type={type}
    style={{ height: '130px', paddingTop: '30px', marginBottom: '20px' }}
  />
);

export default Header;
