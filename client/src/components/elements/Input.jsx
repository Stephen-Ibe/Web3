import React from 'react';

const Input = ({ placeholder, name, type, handleChange, value }) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      type={type}
      onChange={(e) => handleChange(e)}
      step='0.0001'
      value={value}
      className='my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism placeholder:text-sm'
    />
  );
};

export default Input;
