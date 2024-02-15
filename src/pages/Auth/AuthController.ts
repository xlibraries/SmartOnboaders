import UserModel from './UserModel';

const AuthController = {
    handleLogin: (userModel: typeof UserModel, navigate: (path: string) => void) => {
        if (!userModel.validateEmail(userModel.email) || !userModel.validatePassword(userModel.password)) {
            alert('Invalid email or password.');
            return;
        }

        // Log in the user
        console.log(`Logged in with email: ${userModel.email}`);
        navigate('/home');
    },

    handleSignUp: (userModel: typeof UserModel, navigate: (path: string) => void) => {
        if (!userModel.validateEmail(userModel.email) || !userModel.validatePassword(userModel.password) || userModel.password !== userModel.confirmPassword) {
            alert('Invalid email, password, or passwords do not match.');
            return;
        }

        // Register the user
        console.log(`Signed up with username: ${userModel.username}, email: ${userModel.email}`);
        navigate('/home');
    },

    handleAuth: (userModel: typeof UserModel, navigate: (path: string) => void) => {
        if (userModel.isLogin) {
            AuthController.handleLogin(userModel, navigate);
        } else {
            AuthController.handleSignUp(userModel, navigate);
        }
    }
};

export default AuthController;
