import React, { useEffect } from "react";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.css";
import * as AntDesignIcons from "@ant-design/icons";
import * as Antd from "antd";
import "./Tabs.css";

function Tabs() {
  return (
    <div className="tabs">
      <Antd.Tabs centered type="card" size="default" tabPosition="top" defaultActiveKey="1" style={{ width: 334 }}>
        <Antd.Tabs.TabPane key={1} tab="Home"></Antd.Tabs.TabPane>
        <Antd.Tabs.TabPane key={2} tab="About Us"></Antd.Tabs.TabPane>
      </Antd.Tabs>
    </div>
  );
}

export default Tabs;
