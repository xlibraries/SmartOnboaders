import React, { useEffect, useState } from 'react';
import { Form, Input, Select, DatePicker, Row, Col, Collapse } from 'antd';

const { Option } = Select;
const { Panel } = Collapse;

const PersonalDetails: React.FC = () => {
  const [jsonData, setJsonData] = useState<{ [key: string]: any } | null>(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Form layout="vertical">
      <Collapse defaultActiveKey={['1']}>
        {jsonData && Object.entries(jsonData).map(([section, details]) => (
            <Panel header={section} key={section}>
                {details.map((detail: any, index: number) => (
                    <Row gutter={16} key={index}>
                        {Object.entries(detail).map(([key, value]) => (
                            <Col span={8} key={key}>
                                <Form.Item name={key} label={key}>
                                    <Input placeholder={String(value)} />
                                </Form.Item>
                            </Col>
                        ))}
                    </Row>
                ))}
            </Panel>
        ))}
      </Collapse>
    </Form>
  );
};

export default PersonalDetails;
