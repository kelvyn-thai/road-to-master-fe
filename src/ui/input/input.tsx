import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isRequired?: boolean;
  placeholder?: string;
}

function Input({ name, placeholder, ...rest }: InputProps) {
  return (
    <div>
      <label id={name} htmlFor={name}>
        Name
      </label>
      <input
        name={name}
        placeholder={placeholder || `Type your ${name}`}
        {...rest}
      />
    </div>
  );
}

export const InputText = (props: InputProps) => {
  return <Input {...{ type: "text", ...props }} />;
};

Input.Text = InputText;

export default Input;
