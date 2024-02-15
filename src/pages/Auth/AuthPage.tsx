import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Input, Card, Typography } from 'antd';
import UserModel from './UserModel';
import AuthController from './AuthController';
import './AuthPage.css';

const { Title } = Typography;

const AuthPage: React.FC = () => {
    const navigate = useNavigate();
    const { mode } = useParams(); // Get the mode (login or signup) from the route parameters
    const isLogin = mode === 'login';
    const [userModel, setUserModel] = useState({ ...UserModel, isLogin }); // Set isLogin based on the mode

    return (
        <div className="auth-page">
            <Card className="auth-card">
                <Title level={2}>{userModel.isLogin ? 'Login' : 'Sign Up'}</Title>
                <div className="auth-fields">
                    {!userModel.isLogin && <Input value={userModel.username} onChange={(e) => setUserModel({ ...userModel, username: e.target.value })} placeholder="Username" />}
                    <Input className="auth-field" type="email" value={userModel.email} onChange={(e) => setUserModel({ ...userModel, email: e.target.value })} placeholder="Email" />
                    <Input.Password className="auth-field" value={userModel.password} onChange={(e) => setUserModel({ ...userModel, password: e.target.value })} placeholder="Password" />
                    {!userModel.isLogin && <Input.Password className="auth-field" value={userModel.confirmPassword} onChange={(e) => setUserModel({ ...userModel, confirmPassword: e.target.value })} placeholder="Confirm Password" />}
                </div>
                <div className="auth-buttons">
                    <Button className="auth-button" type="primary" onClick={() => AuthController.handleAuth(userModel, navigate)}>{userModel.isLogin ? 'Login' : 'Sign Up'}</Button>
                    <Button className="auth-button" type="default" onClick={() => setUserModel({ ...userModel, isLogin: !userModel.isLogin })}>{userModel.isLogin ? 'Go to Sign Up' : 'Go to Login'}</Button>
                </div>
            </Card>
        </div>
    );
}

export default AuthPage;
