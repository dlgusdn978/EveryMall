import React from "react";

interface CheckboxProps {
  children?: React.ReactNode;
  disabled: boolean;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
const Checkbox = ({ children, disabled, checked, onChange }: CheckboxProps) => {
  return (
    <label>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={(event) => onChange(event)}
      ></input>
      {children}
    </label>
  );
};

export default Checkbox;
