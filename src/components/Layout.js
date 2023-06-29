import React from 'react';

const Layout = (props) => {
  return (
    <div className="site-container">
      {props.children}
    </div>
  );
}

export default Layout;
