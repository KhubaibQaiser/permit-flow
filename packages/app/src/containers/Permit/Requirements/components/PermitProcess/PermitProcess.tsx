import * as React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { UL } from './styles';
import { iPermitProcessProps } from './types';

const PermitProcess: React.FC<iPermitProcessProps> = ({
  title,
  steps,
  onReset,
}) => {
  return (
    <Stack spacing={3}>
      <Stack spacing={0.5}>
        <Typography>
          <b>{title}</b>
        </Typography>
        <UL>
          {steps.map((step) => (
            <li key={step}>
              <Typography>{step}</Typography>
            </li>
          ))}
        </UL>
      </Stack>
      <Button variant="contained" onClick={onReset}>
        Reset
      </Button>
    </Stack>
  );
};

export default PermitProcess;
