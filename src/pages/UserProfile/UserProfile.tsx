// UserProfile.tsx
import React, { useState } from 'react';
import { Avatar, Button, Layout, Menu, Progress } from 'antd';
import PersonalDetails from './Cards/View/PersonalDetails';
import NationalityDetails from './Cards/View/NationalityDetails';
import AddressDetails from './Cards/View/AddressDetails';
import HealthDetails from './Cards/View/HealthDetails';
import ProfessionalReferences from './Cards/View/ProfessionalReferences';
import FamilyDetails from './Cards/View/FamilyDetails';
import EducationDetails from './Cards/View/EducationDetails';
import AdditionalQualifications from './Cards/View/AdditionalQualifications';
import Skills from './Cards/View/Skills';
import EmploymentHistory from './Cards/View/EmploymentHistory';
import AdditionalInformation from './Cards/View/AdditionalInformation';
import './UserProfile.css';

const { Header, Sider, Content } = Layout;

const UserProfile = () => {
  const [selectedKey, setSelectedKey] = useState('1');

  const renderContent = () => {
    switch (selectedKey) {
      case '1':
        return <PersonalDetails />;
      case '2':
        return <NationalityDetails />;
      case '3':
        return <AddressDetails />;
      case '4':
        return <HealthDetails />;
      case '5':
        return <ProfessionalReferences />;
      case '6':
        return <FamilyDetails />;
      case '7':
        return <EducationDetails />;
      case '8':
        return <AdditionalQualifications />;
      case '9':
        return <Skills />;
      case '10':
        return <EmploymentHistory />;
      case '11':
        return <AdditionalInformation />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <div className="avatar-section">
              <Avatar size={64} icon="user" />
              <Button type="link">Replace Image</Button>
            </div>
          <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }} onSelect={({ key }) => setSelectedKey(key)}>
            <Menu.Item key="1">Personal Details</Menu.Item>
            <Menu.Item key="2">Nationality Details</Menu.Item>
            <Menu.Item key="3">Address Details</Menu.Item>
            <Menu.Item key="4">Health Details</Menu.Item>
            <Menu.Item key="5">Professional References</Menu.Item>
            <Menu.Item key="6">Family Details</Menu.Item>
            <Menu.Item key="7">Education Details</Menu.Item>
            <Menu.Item key="8">Additional Qualifications</Menu.Item>
            <Menu.Item key="9">Skills</Menu.Item>
            <Menu.Item key="10">Employment History</Menu.Item>
            <Menu.Item key="11">Additional Information</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content className="site-layout-background">
            {renderContent()}
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
