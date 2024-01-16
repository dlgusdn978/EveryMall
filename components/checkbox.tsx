import React from "react";
interface CheckboxProps {
  children?: React.ReactNode;
  disabled: boolean;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
const Checkbox = ({ children, disabled, checked, onChange }: CheckboxProps) => {
  return (
    <label className="flex">
      <input
        className="w-8 h-8 mr-3"
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={(event) => onChange(event)}
      ></input>
      <div className="flex items-center">{children}</div>
    </label>
  );
};

export default Checkbox;
