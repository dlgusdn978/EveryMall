import React, { MutableRefObject, useState } from "react";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler;
}
const Input = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <input
      type="text"
      className={`border-b-2 w-full p-3 outline-0 focus:border-sky-600 focus:duration-200 `}
      placeholder={`${placeholder}`}
      value={`${value}`}
      onChange={onChange}
    ></input>
  );
};

export default Input;
