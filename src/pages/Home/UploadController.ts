import axios from 'axios'; // Import Axios (make sure it's installed)

const UploadController = {
  // Async function to handle file upload
  handleFileUpload: async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      // Replace with your actual Flask API endpoint
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'application/octet-stream', // Set the content type
        },
      });

      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  },
};

export default UploadController;
