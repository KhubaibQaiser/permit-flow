import * as React from 'react';
import usePermitRequirementsState from './usePermitRequirementsState';
import {
  PermitProcess,
  PermitRequirementForm,
  PermitRequirementPage,
} from './components';

const PermitRequirements = () => {
  const { onSubmit, onReset, permitProcessData } = usePermitRequirementsState();

  return (
    <PermitRequirementPage title="Permit Requirements">
      {permitProcessData ? (
        <PermitProcess
          title={permitProcessData.title}
          steps={permitProcessData.steps}
          onReset={onReset}
        />
      ) : (
        <PermitRequirementForm onSubmit={onSubmit} onReset={onReset} />
      )}
    </PermitRequirementPage>
  );
};

export default PermitRequirements;
