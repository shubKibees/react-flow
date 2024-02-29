import React from 'react'
import AsideNav from './AsideNav';
import ReactFlowGrid from './ReactFlowGrid';
import "../style/mainLayout.scss";

function Layout() {
  return (
    <div className="mainLayout">
      <div className="container">
        <AsideNav />
        <ReactFlowGrid />
      </div>
    </div>
  )
}

export default Layout;