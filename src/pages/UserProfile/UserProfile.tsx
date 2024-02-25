// UserProfile.tsx
import React, { useState } from 'react';
import { Avatar, Button, Layout, Menu, Progress } from 'antd';
import PersonalDetails from './Cards/View/PersonalDetails';
import NationalityDetails from './Cards/View/NationalityDetails';
import AddressDetails from './Cards/View/AddressDetails';
import ProfessionalReferences from './Cards/View/ProfessionalReferences';
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
      case '5':
        return <ProfessionalReferences />;
      case '6':
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
        <Button type="primary" style={{ float: 'right', backgroundColor: 'white', borderColor: 'white', color: 'black' }}>Submit</Button>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }} onSelect={({ key }) => setSelectedKey(key)}>
            <Menu.Item className='slider' key="1">Personal Details</Menu.Item>
            <Menu.Item className='slider' key="2">Nationality Details</Menu.Item>
            <Menu.Item className='slider' key="3">Address Details</Menu.Item>
            <Menu.Item className='slider' key="5">Professional References</Menu.Item>
            <Menu.Item className='slider' key="6">Education Details</Menu.Item>
            <Menu.Item className='slider' key="8">Additional Qualifications</Menu.Item>
            <Menu.Item className='slider' key="9">Skills</Menu.Item>
            <Menu.Item className='slider' key="10">Employment History</Menu.Item>
            <Menu.Item className='slider' key="11">Additional Information</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content className="site-layout-background">
            {renderContent()}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default UserProfile;
