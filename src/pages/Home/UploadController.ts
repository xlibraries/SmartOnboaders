import AWS from 'aws-sdk';

const UploadController = {
  handleFileUpload: async (file: File) => {
    const s3 = new AWS.S3();
    const params = {
      Bucket: 'your-bucket-name',
      Key: file.name,
      Body: file
    };
    try {
      const response = await s3.upload(params).promise();
      console.log(`File uploaded successfully at ${response.Location}`);
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  }
};

export default UploadController;
