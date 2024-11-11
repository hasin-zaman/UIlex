const LoginFormCode = `
import React, { useState } from 'react';

const LoginForm = ({
  title,
  titleColor,
  bgColor,
  formBg,
  focusRingColor,
  buttonTextColor,
  buttonBg,
  buttonText,
  onForgotPassword,
  onSignUp
}) => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Form Submitted:', formData);
  };

  return (
    <div
      className="flex items-center justify-center p-2"
      style={{ background: bgColor }}
    >
      <div
        className="w-full max-w-xs sm:max-w-xs xs:max-w-[200px] rounded-xl shadow-md p-3"
        style={{ backgroundColor: formBg }}
      >
        <h2
          className="text-sm font-bold mb-2 text-center"
          style={{ color: titleColor }}
        >
          {title}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:outline-none transition-all duration-150 text-xs"
              style={{ boxShadow: 'white' }}
              onFocus={(e) => (e.target.style.boxShadow = '0 0 0 2px ' + focusRingColor)}
              onBlur={(e) => (e.target.style.boxShadow = 'none')}
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-2 py-1 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:outline-none transition-all duration-150 text-xs"
              style={{ boxShadow: 'white' }}
              onFocus={(e) => (e.target.style.boxShadow = '0 0 0 2px ' + focusRingColor)}
              onBlur={(e) => (e.target.style.boxShadow = 'none')}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="text-right">
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-xs text-blue-500 hover:underline"
            >
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-1 px-2 rounded-full font-medium text-xs"
            style={{ backgroundColor: buttonBg, color: buttonTextColor }}
          >
            {buttonText}
          </button>
        </form>
        <div className="text-center mt-3">
          <p className="text-xs">
            Don't have an account?{' '}
            <button
              onClick={onSignUp}
              className="text-blue-500 hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

`;

const SignInFormUsage = `
                        <LoginForm
                            title='Login'
                            titleColor='black'
                            bgColor='linear-gradient(to top right, #F472B6, #FB923C, #FACC15)'
                            formBg='white'
                            focusRingColor='#FB923C'
                            buttonTextColor='white'
                            buttonBg='#F472B6'
                            buttonText='Login'
                           forgotPasswordRoute="#"
                           SignUpRoute="#"
                        />`;

export { LoginFormCode, SignInFormUsage };
