import { SelectField } from 'src/components';
import { Button, Stack } from '@mui/material';
import * as React from 'react';
import { FormFooter } from './styles';
import { iPermitRequirementFormProps } from './types';
import usePermitRequirementFormState from './usePermitRequirementFormState';

const PermitRequirementForm: React.FC<iPermitRequirementFormProps> = ({
  onSubmit,
  onReset,
}) => {
  const {
    formRef,
    workData,
    interiorWorkOptions,
    exteriorWorkOptions,
    workTypeSelectOptions,
    handleSubmit,
    handleWorkTypeChange,
    handleWorkChange,
  } = usePermitRequirementFormState({ onSubmit, onReset });

  const workOptionComponent = React.useMemo(() => {
    switch (workData.workType) {
      case 'INTERIOR':
        return (
          <SelectField
            multiple
            name="interiorWork"
            title="What interior work are you doing? (Multi-select)"
            value={workData.work}
            onChange={handleWorkChange}
            options={interiorWorkOptions}
          />
        );
      case 'EXTERIOR':
        return (
          <SelectField
            multiple
            name="exteriorWork"
            title="What sort of exterior work are you doing? (Multi-select)"
            value={workData.work}
            onChange={handleWorkChange}
            options={exteriorWorkOptions}
          />
        );
      default:
        return null;
    }
  }, [workData, exteriorWorkOptions, interiorWorkOptions, handleWorkChange]);

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <Stack flexDirection="column" spacing={1}>
          <SelectField
            name="workType"
            title="What residential work are you doing?"
            value={workData.workType}
            onChange={handleWorkTypeChange}
            options={workTypeSelectOptions}
          />
          {workOptionComponent}
        </Stack>
        <FormFooter>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </FormFooter>
      </Stack>
    </form>
  );
};

export default PermitRequirementForm;
