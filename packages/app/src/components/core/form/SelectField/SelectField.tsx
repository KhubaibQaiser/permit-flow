import { InputLabel, Select, MenuItem, Stack } from '@mui/material';
import * as React from 'react';
import { iSelectFieldProps } from './types';

const SelectField = ({
  title,
  value,
  onChange,
  options,
  ...props
}: iSelectFieldProps) => {
  return (
    <Stack spacing={1}>
      <InputLabel>{title}</InputLabel>
      <Select value={value} onChange={onChange} variant="outlined" {...props}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
};

export default SelectField;
