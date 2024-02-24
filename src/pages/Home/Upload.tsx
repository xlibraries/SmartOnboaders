/* UploadPage.tsx */

import React, { useState } from 'react';
import { Button, Upload, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import UploadController from './UploadController'; // Import the UploadController
import './UploadPage.css'; // Import the CSS file

const UploadPage: React.FC = () => {
  const [fileList, setFileList] = useState<any[]>([]);

  // Define the list of required files
  const requiredFiles = ['Mark sheets', 'Aadhar Card', 'Pan Card', 'Resume', 'Passport', 'Salary Slip'];

  // Handle file upload
  const handleUpload = ({ fileList }: any) => {
    setFileList(fileList.slice(-1)); // Keep only the last uploaded file
    if (fileList.length > 0 && fileList[0].originFileObj) {
      // Call the handleFileUpload method from UploadController
      UploadController.handleFileUpload(fileList[0].originFileObj);
    }
  };

  return (
    <div className="upload-page">
      <Card className="upload-card" title="Upload Files">
        <div className="file-list">
          {requiredFiles.map((file, index) => (
            <div key={index}>{file}</div>
          ))}
        </div>
        <Upload
          action="https://your-flask-api-endpoint.com/upload" // Replace with your actual API URL
          onChange={handleUpload}
          fileList={fileList}
          accept=".zip" // Specify accepted file types (e.g., ZIP)
          maxCount={1} // Limit to only one file
        >
          <Button className="upload-button" icon={<UploadOutlined />}>Upload ZIP</Button>
        </Upload>
      </Card>
    </div>
  );
};

export default UploadPage;
