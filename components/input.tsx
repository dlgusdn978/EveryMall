import React, { MutableRefObject, useState } from "react";

interface InputProps {
  title: string;
  placeholder?: string;
  value: string;
  name?: string;
  onChange: React.ChangeEventHandler;
  readonly?: boolean;
  width?: string;
}
const Input = ({
  title,
  placeholder,
  value,
  onChange,
  readonly,
  name,
  width,
}: InputProps) => {
  return (
    <div className={`py-5 ${width ? `w-${width}` : ""}`}>
      <h1 className="font-bold">{title}</h1>
      <input
        type="text"
        className={`border-b-2 w-full p-3 outline-0 focus:border-sky-600 focus:duration-200 `}
        placeholder={placeholder ? `${placeholder}` : ""}
        name={name}
        value={`${value}`}
        onChange={onChange}
        readOnly={readonly}
      ></input>
    </div>
  );
};

export default Input;
