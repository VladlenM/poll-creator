import React from 'react';
import './Button.scss';

type ButtonProps = {
    id?: string;
    type?: 'primary' | 'link';
    label: string;
    disabled?: boolean;
    onClick: () => void;
}

const Button = ({
  id, type = 'primary', label, disabled, onClick,
}: ButtonProps) => (
  <div
    className={`ButtonContainer ${type} ${disabled ? 'disabled' : ''}`}
    role="button"
    onClick={onClick}
    id={id}
  >
    {label}
  </div>
);

export default Button;
