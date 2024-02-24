// import React, { useState } from 'react';
// import { Input, Checkbox, Form, Row, Col } from 'antd';
// import '../Style/PersonalDetails.css';
// const PersonalDetails = () => {
//   // Replace this with actual data
//   const [data, setData] = useState({
//     "FirstName": "Rajesh",
//     "MiddleName": "Kumar",
//     "LastName": "Verma",
//     "FullNameAsPerAadharCard": "Rajesh Kumar Verma",
//     "TelNo": "011-12345678",
//     "MobNo": "9876543210",
//     "EmailID": "rajesh.verma@example.com",
//     "Gender": "Male",
//     "DateOfBirth": "1988-09-10",
//     "Age": 35,
//     "MaritalStatus": "Married",
//     "IsCurrentAddressSameAsPermanent": true
//   });

//   const handleChange = (event: { target: { name: any; value: any; }; }) => {
//     setData({ ...data, [event.target.name]: event.target.value });
//   };

//   return (
//     <div className="personal-details">
//       <h2>Personal Details</h2>
//       <Form layout="vertical">
//         <Form.Item label="Name:">
//           <Row gutter={16}>
//             <Col span={8}>
//               <Input type="text" name="FirstName" value={data.FirstName} onChange={handleChange} bordered={false} />
//             </Col>
//             <Col span={8}>
//               <Input type="text" name="MiddleName" value={data.MiddleName} onChange={handleChange} bordered={false} />
//             </Col>
//             <Col span={8}>
//               <Input type="text" name="LastName" value={data.LastName} onChange={handleChange} bordered={false} />
//             </Col>
//           </Row>
//         </Form.Item>
//         <Form.Item label="Full Name as per Aadhar Card:">
//           <Input type="text" name="FullNameAsPerAadharCard" value={data.FullNameAsPerAadharCard} onChange={handleChange} />
//         </Form.Item>
//         <Form.Item label="Telephone Number:">
//           <Input type="text" name="TelNo" value={data.TelNo} onChange={handleChange} />
//         </Form.Item>
//         <Form.Item label="Primary Mobile Number:">
//           <Input type="text" name="MobNo" value={data.MobNo} onChange={handleChange} />
//         </Form.Item>
//         <Form.Item label="Email ID:">
//           <Input type="text" name="EmailID" value={data.EmailID} onChange={handleChange} />
//         </Form.Item>
//         <Form.Item label="Gender:">
//           <Input type="text" name="Gender" value={data.Gender} onChange={handleChange} />
//         </Form.Item>
//         <Form.Item label="Date of Birth:">
//           <Input type="text" name="DateOfBirth" value={data.DateOfBirth} onChange={handleChange} />
//         </Form.Item>
//         <Form.Item label="Age:">
//           <Input type="text" name="Age" value={data.Age} onChange={handleChange} />
//         </Form.Item>
//         <Form.Item label="Marital Status:">
//           <Input type="text" name="MaritalStatus" value={data.MaritalStatus} onChange={handleChange} />
//         </Form.Item>
//         <Form.Item label="Is Current Address Same As Permanent:">
//           <Checkbox name="IsCurrentAddressSameAsPermanent" checked={data.IsCurrentAddressSameAsPermanent} onChange={(e) => setData({ ...data, IsCurrentAddressSameAsPermanent: e.target.checked })}>Yes</Checkbox>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default PersonalDetails;




import React, { useState } from 'react';
import { Input, Checkbox, Form, Row, Col } from 'antd';
import '../Style/PersonalDetails.css';

const PersonalDetails = () => {
  // Sample data
  const [data, setData] = useState({
    "FirstName": "Rajesh",
    "MiddleName": "Kumar",
    "LastName": "Verma",
    "FullNameAsPerAadharCard": "Rajesh Kumar Verma",
    "TelNo": "011-12345678",
    "MobNo": "9876543210",
    "EmailID": "rajesh.verma@example.com",
    "Gender": "Male",
    "DateOfBirth": "1988-09-10",
    "Age": 35,
    "MaritalStatus": "Married",
    "IsCurrentAddressSameAsPermanent": true
  });

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="personal-details">
      <h2>Personal Details</h2>
      <Form layout="vertical">
        <Form.Item label="Full Name as per Aadhar Card:">
          <Input type="text" name="FullNameAsPerAadharCard" value={data.FullNameAsPerAadharCard} onChange={handleChange} style={{ backgroundColor: '#f5f5f5' }} />
        </Form.Item>
        {/* Add other form items */}
        <Form.Item label="Gender:">
          <Input type="text" name="Gender" value={data.Gender} onChange={handleChange} style={{ backgroundColor: '#f5f5f5' }} />
        </Form.Item>
        <Form.Item label="Date of Birth:">
          <Input type="text" name="DateOfBirth" value={data.DateOfBirth} onChange={handleChange} style={{ backgroundColor: '#f5f5f5' }} />
        </Form.Item>
        <Form.Item label="Age:">
          <Input type="text" name="Age" value={data.Age} onChange={handleChange} style={{ backgroundColor: '#f5f5f5' }} />
        </Form.Item>
        <Form.Item label="Marital Status:">
          <Input type="text" name="MaritalStatus" value={data.MaritalStatus} onChange={handleChange} style={{ backgroundColor: '#f5f5f5' }} />
        </Form.Item>
        <Form.Item label="Is Current Address Same As Permanent:">
          <Checkbox name="IsCurrentAddressSameAsPermanent" checked={data.IsCurrentAddressSameAsPermanent} onChange={(e) => setData({ ...data, IsCurrentAddressSameAsPermanent: e.target.checked })}>Yes</Checkbox>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalDetails;
