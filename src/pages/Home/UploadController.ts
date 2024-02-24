import AWS from '../../server/server';

const UploadController = {
  handleFileUpload: async (file: File) => {
    const s3 = new AWS.S3();
    const params = {
      Bucket: 'testing-zip-upload',
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
