import * as React from 'react';
import { Typography } from '@mui/material';
import { Page } from 'src/components';
import { PageWrapper } from './styles';
import { iPermitRequirementPageProps } from './types';

const PermitRequirementPage: React.FC<iPermitRequirementPageProps> = ({
  title,
  children,
}) => {
  return (
    <Page>
      <PageWrapper spacing={2}>
        <Typography variant="h4" textAlign="center">
          {title}
        </Typography>
        {children}
      </PageWrapper>
    </Page>
  );
};

export default PermitRequirementPage;
