import React, { useState } from 'react';
import { Select } from 'tdesign-react';

export default function SelectCreatable() {
  const [value, setValue] = useState('apple');
  const [options, changeOptions] = useState([
    {
      label: 'Apple',
      value: 'apple',
    },
    {
      label: 'Banana',
      value: 'banana',
    },
    {
      label: 'Orange',
      value: 'orange',
    },
  ]);
  const onChange = (value) => {
    setValue(value);
  };
  const handleOnCreate = (value) => {
    changeOptions(options.concat([{ value, label: value }]));
  };
  return (
    <Select
      value={value}
      onChange={onChange}
      style={{ width: '40%' }}
      options={options}
      filterable
      creatable
      onCreate={handleOnCreate}
    />
  );
}
