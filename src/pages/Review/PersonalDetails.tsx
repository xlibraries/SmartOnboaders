import React from 'react';
import { Form, Input, Select, DatePicker, Row, Col, Collapse } from 'antd';

const { Option } = Select;
const { Panel } = Collapse;

const PersonalDetailsForm: React.FC = () => {
    return (
        <Form layout="vertical">
            <Collapse defaultActiveKey={['1']}>
                <Panel header="Personal Details" key="1">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item name="firstName" label="Full Name">
                                <Input placeholder="Enter your full name" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="middleName" label="Middle Name">
                                <Input placeholder="Enter your middle name" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="lastName" label="Last Name">
                                <Input placeholder="Enter your last name" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item name="telNo" label="Telephone Number">
                                <Input placeholder="Enter your telephone number" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="mobNo" label="Primary Mobile Number">
                                <Input placeholder="Enter your primary mobile number" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="secondaryMobNo" label="Secondary Mobile Number">
                                <Input placeholder="Enter your secondary mobile number" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item name="emailID" label="Email ID">
                                <Input placeholder="Enter your email ID" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item name="dateOfBirth" label="Date of Birth">
                                <DatePicker placeholder="Select your date of birth" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="age" label="Age">
                                <Input placeholder="Enter your age" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="maritalStatus" label="Marital Status">
                                <Select placeholder="Select your marital status">
                                    <Option value="single">Single</Option>
                                    <Option value="married">Married</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Nationality Details" key="2">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item name="aadharNo" label="Aadhar Number">
                                <Input placeholder="Enter your Aadhar number" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="panNo" label="PAN Number">
                                <Input placeholder="Enter your PAN number" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="passportNo" label="Passport Number">
                                <Input placeholder="Enter your passport number" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="Citizenship" label="Citizenship">
                                <Input placeholder="Enter your citizenship" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="workAuthorization" label="Work Authorization">
                                <Input placeholder="Enter your visa status" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="Narionality" label="Nationalilty">
                                <Input placeholder="Enter your Nationality" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Address Details" key="2">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item name="address" label="Address">
                                <Input placeholder="Enter your address" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="city" label="City">
                                <Input placeholder="Enter your city" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="state" label="State">
                                <Input placeholder="Enter your state" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item name="country" label="Country">
                                <Input placeholder="Enter your country" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="pincode" label="Pincode">
                                <Input placeholder="Enter your pincode" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Panel>
                <Panel header="Health Details" key="2">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item name="criticalIllness" label="Critical Illness">
                                <Select placeholder="Do you have a critical illness?">
                                    <Option value={true}>Yes</Option>
                                    <Option value={false}>No</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="bloodGroup" label="Blood Group">
                                <Input placeholder="Enter your blood group" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Panel>

                <Panel header="Professional References" key="3">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item name="knowSomeoneInOrg" label="Know Someone in Organization">
                                <Select placeholder="Do you know someone in the organization?">
                                    <Option value={true}>Yes</Option>
                                    <Option value={false}>No</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="referenceName" label="Reference Name">
                                <Input placeholder="Enter the name of your reference" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="referencePhoneNumber" label="Reference Phone Number">
                                <Input placeholder="Enter the phone number of your reference" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Panel>

                <Panel header="Family Details" key="4">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item name="familyName" label="Family Member Name">
                                <Input placeholder="Enter family member's name" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="relation" label="Relation">
                                <Input placeholder="Enter relation with family member" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="familyAge" label="Family Member Age">
                                <Input placeholder="Enter family member's age" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Panel>

                <Panel header="Education Details" key="5">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item name="educationQualification" label="Education Qualification">
                                <Input placeholder="Enter your education qualification" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="yearOfPassing" label="Year of Passing">
                                <Input placeholder="Enter your year of passing" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="percentageOrCGPA" label="Percentage or CGPA">
                                <Input placeholder="Enter your percentage or CGPA" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Panel>

                <Panel header="Additional Qualifications" key="6">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item name="additionalQualificationTitle" label="Title">
                                <Input placeholder="Enter the title of your additional qualification" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="institute" label="Institute">
                                <Input placeholder="Enter the institute of your additional qualification" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="partTime" label="Part Time">
                                <Select placeholder="Is this a part-time qualification?">
                                    <Option value={true}>Yes</Option>
                                    <Option value={false}>No</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Panel>

                <Panel header="Skills" key="7">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item name="primarySkill" label="Primary Skill">
                                <Input placeholder="Enter your primary skill" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="secondarySkill" label="Secondary Skill">
                                <Input placeholder="Enter your secondary skill" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="otherSkills" label="Other Skills">
                                <Input placeholder="Enter your other skills" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Panel>

                <Panel header="Employment History" key="8">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item name="hasWorkExperience" label="Work Experience">
                                <Select placeholder="Do you have work experience?">
                                    <Option value={true}>Yes</Option>
                                    <Option value={false}>No</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="orgName" label="Organization Name">
                                <Input placeholder="Enter the name of your organization" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="startDate" label="Start Date">
                                <DatePicker placeholder="Select your start date" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Panel>

                <Panel header="Additional Information" key="9">
                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item name="careerAchievements" label="Career Achievements">
                                <Input placeholder="Enter your career achievements" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item name="comments" label="Comments">
                                <Input placeholder="Enter your comments" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Panel>
            </Collapse>
        </Form>
    );
};

export default PersonalDetailsForm;
