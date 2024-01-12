import React from "react";

interface InputProps {
  placeholder: String;
}
const Input = (props: InputProps) => {
  return (
    <input
      type="text"
      className="border-b-2 w-full p-3 outline-0 focus:border-sky-600 focus:duration-200"
      placeholder={`${props.placeholder}`}
    ></input>
  );
};

export default Input;
