import {
  WorkType,
  Work,
  InteriorWorkType,
  ExteriorWorkType,
  PermitProcessResponse,
  PermitReviewRequirement,
} from './types';
import { ReviewProcessStep } from './db';

const getPermitReviewProcess = (
  requirements: PermitReviewRequirement
): PermitProcessResponse => {
  if (requirements.IN_HOUSE_REVIEW) {
    return {
      title: 'In-House Review Process',
      steps: [
        ReviewProcessStep.BUILDING_PERMIT,
        ReviewProcessStep.APPLICATION_WITH_PLANS,
        ReviewProcessStep.SUBMIT_IN_HOUSE,
      ],
    };
  } else if (requirements.OTC_WITH_PLANS || requirements.OTC_WITHOUT_PLANS) {
    return {
      title: 'Over-the-Counter Submission Process',
      steps: [
        ReviewProcessStep.BUILDING_PERMIT,
        requirements.OTC_WITHOUT_PLANS
          ? ReviewProcessStep.APPLICATION_WITHOUT_PLANS
          : ReviewProcessStep.APPLICATION_WITH_PLANS,
        ReviewProcessStep.SUBMIT_IN_HOUSE,
      ],
    };
  }
  return {
    title: 'No Permit',
    steps: [ReviewProcessStep.NOTHING_REQUIRED],
  };
};

const getInteriorWorkRequirements = (
  work: InteriorWorkType[]
): PermitProcessResponse => {
  const requirements: PermitReviewRequirement = {};
  for (let i = 0; i < work.length; i++) {
    const w = work[i];
    switch (w) {
      case 'NEW_BATHROOM':
      case 'NEW_LAUNDRY_ROOM':
        requirements['OTC_WITH_PLANS'] = 'OTC_WITH_PLANS';
        break;
      default:
        requirements['OTC_WITHOUT_PLANS'] = 'OTC_WITHOUT_PLANS';
    }
  }
  return getPermitReviewProcess(requirements);
};

const getExteriorWorkRequirements = (
  work: ExteriorWorkType[]
): PermitProcessResponse => {
  const requirements: PermitReviewRequirement = {};
  for (let i = 0; i < work.length; i++) {
    const w = work[i];
    switch (w) {
      case 'OTHER':
        requirements['IN_HOUSE_REVIEW'] = 'IN_HOUSE_REVIEW';
        break;
      case 'GARAGE_DOOR_REPLACEMENT':
      case 'EXTERIOR_DOORS':
        requirements['OTC_WITH_PLANS'] = 'OTC_WITH_PLANS';
        break;
      case 'RE_ROOFING':
        requirements['OTC_WITHOUT_PLANS'] = 'OTC_WITHOUT_PLANS';
        break;
      case 'FENCE_LESS_THAN_6_FEET':
        requirements['NO_REQUIREMENT'] = 'NO_REQUIREMENT';
        break;
    }
  }
  return getPermitReviewProcess(requirements);
};

export const getPermiRequirements = (
  workType: WorkType,
  work: Work[]
): PermitProcessResponse => {
  switch (workType) {
    case 'INTERIOR':
      return getInteriorWorkRequirements(work as InteriorWorkType[]);

    case 'EXTERIOR':
      return getExteriorWorkRequirements(work as ExteriorWorkType[]);
  }
};
