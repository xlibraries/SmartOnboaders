import React, { useState } from 'react';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import UploadController from './UploadController';
import './UploadPage.css';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';

const UploadPage: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile<any>[]>([]);

  const handleUpload = ({ fileList }: UploadChangeParam) => {
    console.log(fileList);
    setFileList(fileList);
    if (fileList.length > 0 && fileList[0].originFileObj) {
      UploadController.handleFileUpload(fileList[0].originFileObj);
    }
  };

  return (
    <div className="upload-page">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={handleUpload}
        fileList={fileList}
      >
        <Button icon={<UploadOutlined />}>Upload PDF</Button>
      </Upload>
    </div>
  );
};

export default UploadPage;
