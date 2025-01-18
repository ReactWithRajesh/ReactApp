import React from 'react';

const Main = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Main Page</h1>
      <p>This is a protected route. Only authenticated users can see this page.</p>
    </div>
  );
};

export default Main;
