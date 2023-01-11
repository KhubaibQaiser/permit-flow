import * as React from 'react';
import { PageContainer, PageContent, PageContentWrapper } from './styles';

const Page = ({ children }: React.PropsWithChildren) => {
  return (
    <PageContainer maxWidth="sm">
      <PageContentWrapper elevation={1}>
        <PageContent>{children}</PageContent>
      </PageContentWrapper>
    </PageContainer>
  );
};

export default Page;
