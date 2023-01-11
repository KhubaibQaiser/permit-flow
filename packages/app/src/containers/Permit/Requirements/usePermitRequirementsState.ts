import * as React from 'react';
import { trpc } from '@api/trpc/config';
import { PermitRequirementsFormType } from './components';
import { PermitProcessResponse } from '@permit-flow/server';

const usePermitRequirementsState = () => {
  const [permitRequirementsPayload, setPermitRequirementsPayload] =
    React.useState<Required<PermitRequirementsFormType> | null>(null);
  const [permitProcessData, setPermitProcessData] =
    React.useState<PermitProcessResponse | null>(null);

  trpc.permit.getRequirements.useQuery(
    permitRequirementsPayload
      ? {
          workType: permitRequirementsPayload.workType,
          work: permitRequirementsPayload.work,
        }
      : undefined,
    {
      enabled: Boolean(permitRequirementsPayload),
      onSuccess: (data) => {
        setPermitProcessData(data);
      },
    }
  );

  const onSubmit = React.useCallback(
    (workData: Required<PermitRequirementsFormType>) => {
      if (
        typeof workData.workType === 'string' &&
        Array.isArray(workData.work) &&
        workData.work.length > 0
      ) {
        setPermitRequirementsPayload({
          workType: workData.workType,
          work: workData.work,
        });
      }
    },
    []
  );

  const onReset = React.useCallback(() => {
    setPermitRequirementsPayload(null);
    setPermitProcessData(null);
  }, []);

  return {
    onSubmit,
    onReset,
    permitProcessData,
  };
};

export default usePermitRequirementsState;
