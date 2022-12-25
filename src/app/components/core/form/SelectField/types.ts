import { SelectProps } from '@mui/material';

export interface iSelectFieldProps extends Omit<SelectProps, 'onChange'> {
  title: string;
  options: SelectFieldOptionType[];
  onChange: Required<SelectProps>['onChange'];
}

export type SelectFieldOptionType<T = string> = {
  value: T;
  label: string;
};
