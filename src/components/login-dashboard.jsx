import React, { useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";

import Login from "../components/login";
import Users from "../components/dashboard/users/user";

// imported images
import Logo from "../assets/lensqr-logo.svg";
import UserCard from "./dashboard/users/user-card";
const { Header, Content, Sider } = Layout;

// Top Navbar Items
// const topMenuItems = [
//   { key: 'home', label: 'Home' },
//   { key: 'about', label: 'About Us' },
//   { key: 'contact', label: 'Contact' },
// //   <h1>TEST</h1>
// ];

// Sidebar Menu Items
const sidebarMenuItems = [
  {
    key: "users",
    icon: <UserOutlined />,
    label: "Switch Organization",
    children: [{ key: "dashboard", label: "Dashboard" }],
  },

  {
    key: "custumers",
    icon: <UserOutlined />,
    label: "Customers",
    children: [
      { key: "users", label: "Users" },
      { key: "guarantor", label: "Guarantor" },
      { key: "loan", label: "Loans" },
      { key: "decision-models", label: "Decision Models" },
      { key: "savings", label: "Savings" },
      { key: "loan-request", label: "Loan Request" },
      { key: "white-list", label: "White-List", icon: <LaptopOutlined /> },
    ],
  },
  {
    key: "settings",
    icon: <LaptopOutlined />,
    label: "Settings",
    children: [
      { key: "profile", label: "Profile" },
      { key: "security", label: "Security" },
    ],
  },
  {
    key: "notifications",
    icon: <NotificationOutlined />,
    label: "Notifications",
    children: [
      { key: "messages", label: "Messages" },
      { key: "alerts", label: "Alerts" },
    ],
  },
];

// Content for each sidebar key
const contentMap = {
  users: (
    <div>
      <Users />
    </div>
  ),
  guarantor: <p>Add a new user here.</p>,
  loan: <p>GUARANTOR PAGE.</p>,
  "decision-model": <p>Edit your profile here.</p>,
  savings: <p>Security settings go here.</p>,
  "loan-request": <p>Your messages appear here.</p>,
  "white-list": <p>System alerts will show here.</p>,
};

const LoginDashboard = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // 1. State to track selected content
  const [selectedKey, setSelectedKey] = useState("user-list");
// colaspeible sidebar
const [collapsed, setCollapsed] = useState(false);
  // 2. Handle menu clicks
  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ color: '#fff', fontWeight: 'bold', fontSize: 20, marginRight: 20, backgroundColor:'red'}}>
          <div>
            <div>
                <img src={Logo} alt='' />
            </div>
            <div><input /></div>

          </div>

          <div>

          </div>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['home']}
          items={topMenuItems}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header> */}

      <Layout>
        <Sider
          width={240}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          breakpoint="md"
          onBreakpoint={(broken) => setCollapsed(broken)}
          style={{ background: colorBgContainer }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["user-list"]}
            defaultOpenKeys={["users"]}
            style={{ height: "100%", borderRight: 0 }}
            items={sidebarMenuItems}
            onClick={handleMenuClick} // added
          />
        </Sider>

        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[{ title: "Dashboard" }, { title: selectedKey }]}
          />

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: "#e5e5e5",
              borderRadius: borderRadiusLG,
            }}
          >
            {contentMap[selectedKey] || <UserCard />}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LoginDashboard;
