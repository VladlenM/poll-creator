import React from 'react';
import type { Option } from '../../types';
import './SelectField.scss';

type SelectProps = {
    name: string;
    label: string;
    options: Option[];
    onSelect: (value: string) => void;
}
const SelectField = ({
  name, label, options, onSelect,
}: SelectProps) => (
  <div className="SelectFieldConniner">
    <label htmlFor={name}>{label}</label>
    <select name={name} id={name} onChange={(event) => onSelect(event.target.value)}>
      {options.map((item) => <option value={item.value}>{item.label}</option>) }
    </select>
  </div>
);

export default SelectField;
