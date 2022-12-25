import styled from '@emotion/styled';
import { Container, Paper, Stack } from '@mui/material';

export const PageContainer = styled(Container)({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const PageContentWrapper = styled(Paper)({
  display: 'flex',
  flex: 1,
  padding: 24,
});

export const PageContent = styled(Stack)({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
});
