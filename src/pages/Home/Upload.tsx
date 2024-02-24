import React, { useState } from 'react';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import UploadController from './UploadController'; // Import the UploadController

const UploadPage: React.FC = () => {
  const [fileList, setFileList] = useState<any[]>([]);

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
      <Upload
        action="https://your-flask-api-endpoint.com/upload" // Replace with your actual API URL
        onChange={handleUpload}
        fileList={fileList}
        accept=".zip" // Specify accepted file types (e.g., ZIP)
        maxCount={1} // Limit to only one file
      >
        <Button icon={<UploadOutlined />}>Upload ZIP</Button>
      </Upload>
    </div>
  );
};

export default UploadPage;
