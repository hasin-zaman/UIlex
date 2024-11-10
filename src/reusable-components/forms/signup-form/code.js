const SignUpFormCode =
    `import React, { useState } from 'react';

const SignUpForm = ({ title, titlecolor, bgColor, formBg, usernames, focusRingColor, buttonTextColor, buttonBg, buttonText }) => {
  const [formData, setFormData] = useState(
    usernames.reduce((acc, username) => ({ ...acc, [username]: '' }), {})
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted: ', formData);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: bgColor }}
    >
      <div
        className="w-full max-w-md rounded-3xl shadow-lg p-8"
        style={{ backgroundColor: formBg }}
      >
        <h2
          className="text-3xl font-bold mb-6 text-center"
          style={{ color: titlecolor }}
        >
          {title}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {usernames.map((username, index) => (
            <div key={index}>
              <label className="block text-md font-medium text-gray-800 mb-1">
                {username}
              </label>
              <input
                type={username === "password" || username === "Password" ? "password" : "text"}
                name={username}
                value={formData[username]}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:outline-none transition-all duration-200"
                style={{ boxShadow: 'white' }}
                onFocus={(e) => e.target.style.boxShadow = \\\0 0 0 2px \${focusRingColor}\}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
                placeholder={\\\Enter \${username}\}
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-full font-semibold text-md"
            style={{ backgroundColor: buttonBg, color: buttonTextColor }}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;`;

const SignUpFormCodeUsage = (
    `<SignUpForm
        title='Sign Up'
        titlecolor='black'
        bgColor='linear-gradient(to top right, #34D399, #3B82F6, #A78BFA)'
        formBg='white'
        usernames={["username", "email", "password"]}
        focusRingColor='#93C5FD'
        buttonTextColor='white'
        buttonBg='#2563EB'
        buttonText='Sign Up'
      />`
);


export { SignUpFormCode, SignUpFormCodeUsage };