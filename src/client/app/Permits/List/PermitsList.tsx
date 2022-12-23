import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import usePermitsListState from './usePermitsListState';

const PermitsList = () => {
  const permitsData = usePermitsListState();

  return (
    <Stack>
      <Typography>Permits List Page</Typography>
      <Box flexDirection="column">
        {permitsData.data?.map((permit) => (
          <Typography key={permit}>{permit}</Typography>
        ))}
      </Box>
    </Stack>
  );
};

export default PermitsList;
