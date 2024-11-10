import React, { useState } from 'react';

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
      className="flex items-center justify-center p-2"
      style={{ background: bgColor }}
    >
      <div
        className="w-full max-w-xs sm:max-w-xs xs:max-w-[200px] rounded-xl shadow-md p-3"
        style={{ backgroundColor: formBg }}
      >
        <h2
          className="text-sm font-bold mb-2 text-center"
          style={{ color: titlecolor }}
        >
          {title}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          {usernames.map((username, index) => (
            <div key={index}>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                {username}
              </label>
              <input
                type={username === "password" || username === "Password" ? "password" : "text"}
                name={username}
                value={formData[username]}
                onChange={handleInputChange}
                className="w-full px-2 py-1 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:outline-none transition-all duration-150 text-xs"
                style={{ boxShadow: 'white' }}
                onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px ${focusRingColor}`}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
                placeholder={`Enter ${username}`}
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-1 px-2 rounded-full font-medium text-xs"
            style={{ backgroundColor: buttonBg, color: buttonTextColor }}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
