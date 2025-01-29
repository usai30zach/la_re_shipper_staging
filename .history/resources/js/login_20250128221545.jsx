import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import 'font-awesome/css/font-awesome.min.css';

const LoginPage = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="flex items-center justify-center mb-8">
                    <h1 className="login-title mb-0 text-center mx-auto">TK Shipper Staging</h1>
                </div>
                
                <form>
                    <input
                        type="email"
                        placeholder="User Name"
                        className="login-input"
                        required
                    />
                    <div className="password-container" style={{ position: 'relative' }}>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="login-input"
                            required
                            style={{ paddingRight: '40px' }}
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            <i className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"} style={{ color: 'grey' }}></i>
                        </button>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/* <a href="#" className="forgot-password" style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '16px' }}>
                            Forgot your password?
                        </a> */}
                        <button type="submit" className="login-button" style={{ width: '200px' }}>
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
ReactDOM.createRoot(document.getElementById('app')).render(<LoginPage />);
