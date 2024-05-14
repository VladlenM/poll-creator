import React from 'react';
import './TextField.scss';

type TextFieldProps = {
    name: string;
    label?: string;
    placeholder?: string;
    type: 'text' | 'textarea';
    value: string;
    onChange: (value: string) => void;
}

const TextField = ({
  name, type, label, value, placeholder, onChange,
}: TextFieldProps) => (
  <div className="TextFieldContainer">
    {!!label && <label htmlFor={name}>{label}</label>}
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder ? `Ex: ${placeholder}` : ''}
        onChange={(event) => onChange(event.target.value)}
      />
    ) : (
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder ? `Ex: ${placeholder}` : ''}
        onChange={(event) => onChange(event.target.value)}
      />
    )}
  </div>
);

export default TextField;
