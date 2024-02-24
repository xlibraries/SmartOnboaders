// App.tsx
import React from 'react';
import { Layout, Menu, Avatar, Progress, Button } from 'antd';
import './UserProfile.css';

const { Header, Sider, Content } = Layout;

const UserProfile = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
            <Menu.Item key="1">Employee Info</Menu.Item>
            <Menu.Item key="2">Job Info</Menu.Item>
            <Menu.Item key="3">Documents</Menu.Item>
            <Menu.Item key="4">Travel Details</Menu.Item>
            <Menu.Item key="5">Details</Menu.Item>
            <Menu.Item key="6">Benefits</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div className="avatar-section">
              <Avatar size={64} icon="user" />
              <Button type="link">Replace Image</Button>
            </div>
            <div className="info-section">
              <h2>Employee Info</h2>
              <p>Name: John Doe</p>
              <p>Position: Software Engineer</p>
              <p>Department: Engineering</p>
            </div>
          </Content>
          <div className="progress-section">
            <h2>Profile Progress</h2>
            <Progress percent={70} />
          </div>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default UserProfile;
