import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Input, Card, Typography } from 'antd';
import './Completed.css';

const { Title } = Typography;

const Completed: React.FC = () => {
    const navigate = useNavigate();
    const { mode } = useParams(); // Get the mode (login or signup) from the route parameters
    const isLogin = mode === 'login';

    return (
        <div className="comp-page">
            <h1 className="comp-card">
                THank-you HR you get back to you soon
            </h1>
        </div>
    );
}

export default Completed;
