import { z } from 'zod';

export const workTypeSchema = z.enum(['INTERIOR', 'EXTERIOR']);
export type WorkType = z.TypeOf<typeof workTypeSchema>;

const interiorWorkTypes = [
  'NEW_BATHROOM',
  'REMODEL_BATHROOM',
  'NEW_LAUNDRY_ROOM',
  'OTHER',
] as const;
const exteriorWorkTypes = [
  'GARAGE_DOOR_REPLACEMENT',
  'EXTERIOR_DOORS',
  'RE_ROOFING',
  'FENCE_LESS_THAN_6_FEET',
  'OTHER',
] as const;
const allWorks = [...interiorWorkTypes, ...exteriorWorkTypes] as const;

export const interiorWorkTypeSchema = z.enum(interiorWorkTypes);
export type InteriorWorkType = z.TypeOf<typeof interiorWorkTypeSchema>;

export const exteriorWorkTypeSchema = z.enum(exteriorWorkTypes);
export type ExteriorWorkType = z.TypeOf<typeof exteriorWorkTypeSchema>;

export const workSchema = z.enum(allWorks);

export type Work = InteriorWorkType | ExteriorWorkType;

export interface iPermitActionPayload {
  type: WorkType;
  work: Work;
}

type Option<T> = {
  id: string;
  key: T;
  value: string;
};
export type WorkTypeOption = Option<WorkType>;
export type InteriorWorkOption = Option<InteriorWorkType>;
export type ExteriorWorkOption = Option<ExteriorWorkType>;
export type WorkOption = InteriorWorkOption[] | ExteriorWorkOption[];

export type PermitRequirementTypes =
  | 'IN_HOUSE_REVIEW'
  | 'OTC_WITH_PLANS'
  | 'OTC_WITHOUT_PLANS'
  | 'NO_REQUIREMENT';
export type PermitRequirementType = Record<PermitRequirementTypes, string>;

export type PermitReviewRequirement = Partial<
  Record<PermitRequirementTypes, PermitRequirementTypes>
>;
export type PermitProcessResponse = {
  title: string;
  steps: string[];
};
