import styled from '@emotion/styled';
import { Stack, StackProps } from '@mui/material';

const CustomStack = (props: StackProps) => {
  return <Stack direction="row" spacing={1} {...props} />;
};
export const FormFooter = styled(CustomStack)({
  '>*': {
    display: 'flex',
    flex: 1,
  },
});
