import { Work, WorkType } from '@server/routers';

export interface iPermitRequirementFormProps {
  onSubmit: PermitRequirementFormSubmitHandler;
  onReset: VoidFunction;
}

export type PermitRequirementsFormType = {
  workType?: WorkType;
  work: Work[];
};

export type PermitRequirementFormSubmitHandler = (
  values: Required<PermitRequirementsFormType>
) => void;

export type iUsePermitRequirementFormProps = Pick<
  iPermitRequirementFormProps,
  'onSubmit' | 'onReset'
>;
