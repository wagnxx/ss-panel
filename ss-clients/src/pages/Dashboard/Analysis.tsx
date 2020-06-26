import React from 'react';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f6f6f6',
      }}
    >
      <h3>请上茶</h3>
      <img src={require('../../assets/images/tea.jpeg')} alt="" />
    </div>
  );
};
