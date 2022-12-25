import * as React from 'react';
import { trpc } from '@api/trpc/config';
import { initialValues } from './form';
import {
  iUsePermitRequirementFormProps,
  PermitRequirementsFormType,
} from './types';
import { SelectFieldOptionType } from '@app/components';
import { InteriorWorkType, Work, WorkType } from '@server/routers/permit/types';
import { iSelectFieldProps } from '@app/components/core/form/SelectField/types';

const usePermitRequirementFormState = ({
  onSubmit,
  onReset,
}: iUsePermitRequirementFormProps) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [workData, setWorkData] =
    React.useState<PermitRequirementsFormType>(initialValues);

  const workTypesData = trpc.permit.getWorkTypes.useQuery();
  const interiorWorkData = trpc.permit.getInteriorWorkTypes.useQuery();
  const exteriorWorkData = trpc.permit.getExteriorWorkTypes.useQuery();

  const workTypeSelectOptions: SelectFieldOptionType[] = React.useMemo(() => {
    if (workTypesData.data)
      return workTypesData.data.map((workType) => ({
        label: workType.value,
        value: workType.key,
      }));
    return [];
  }, [workTypesData.data]);

  const interiorWorkOptions: SelectFieldOptionType<InteriorWorkType>[] =
    React.useMemo(() => {
      if (interiorWorkData.data)
        return interiorWorkData.data.map((work) => ({
          label: work.value,
          value: work.key,
        }));
      return [];
    }, [interiorWorkData.data]);

  const exteriorWorkOptions: SelectFieldOptionType[] = React.useMemo(() => {
    if (exteriorWorkData.data)
      return exteriorWorkData.data.map((work) => ({
        label: work.value,
        value: work.key,
      }));
    return [];
  }, [exteriorWorkData.data]);

  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Can improve form validation
      // maybe integrate react-hook-form
      if (workData && workData.work && workData.workType) {
        onSubmit(workData as Required<PermitRequirementsFormType>);
      } else {
        // Handle errors
      }
    },
    [workData, onSubmit]
  );

  const handleReset = React.useCallback(() => {
    setWorkData(initialValues);
    formRef.current?.reset();
    onReset();
  }, [onReset]);

  const handleWorkTypeChange = React.useCallback<iSelectFieldProps['onChange']>(
    (event) => {
      const value = event.target.value as WorkType;
      setWorkData({
        workType: value,
        work: initialValues.work,
      });
      onReset();
    },
    [onReset]
  );

  const handleWorkChange = React.useCallback<iSelectFieldProps['onChange']>(
    (event) => {
      const value = event.target.value as Work[];
      setWorkData((data) => ({
        ...data,
        work: value,
      }));
      onReset();
    },
    [onReset]
  );

  return {
    formRef,
    workData,
    setWorkData,
    workTypeSelectOptions,
    interiorWorkOptions,
    exteriorWorkOptions,
    handleSubmit,
    handleReset,
    handleWorkTypeChange,
    handleWorkChange,
  };
};

export default usePermitRequirementFormState;
