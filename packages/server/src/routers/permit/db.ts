import {
  ExteriorWorkOption,
  InteriorWorkOption,
  PermitRequirementType,
  WorkTypeOption,
} from './types';
// dummy db
// can use Prisma+SQLite for a real db
/*
Example Work Types Table
-----------------------------------------------
|     id    |     key   |     description     |
-----------------------------------------------
|     123   |  INTERIOR |     Interior work   |
-----------------------------------------------
|     456   |  EXTERIOR |     Exterior work   |
-----------------------------------------------
*/

/*
Example Work Types Table
---------------------------------------------------------------------------------------------
|     id    |     work_id   |                   key         |         description           |
---------------------------------------------------------------------------------------------
|     222   |       123     |               NEW_BATHROOM    |         New bathroom          |
---------------------------------------------------------------------------------------------
|     333   |       456     |     GARAGE_DOOR_REPLACEMENT   |    Garage door replacement    |
---------------------------------------------------------------------------------------------

id -> is going to be a UUID but for now i am using dummy shorter values
*/

export const workTypeOptions: WorkTypeOption[] = [
  { id: '123', key: 'INTERIOR', value: 'Interior work' },
  { id: '456', key: 'EXTERIOR', value: 'Exterior Work' },
];

export const interiorWorkOptions: InteriorWorkOption[] = [
  { id: '222', key: 'NEW_BATHROOM', value: 'New bathroom' },
  { id: '333', key: 'NEW_LAUNDRY_ROOM', value: 'New laundry room' },
  { id: '444', key: 'REMODEL_BATHROOM', value: 'Bathroom remodel' },
  { id: '555', key: 'OTHER', value: 'Other' },
];

export const exteriorWorkOptions: ExteriorWorkOption[] = [
  {
    id: '666',
    key: 'GARAGE_DOOR_REPLACEMENT',
    value: 'Garage door replacement',
  },
  { id: '777', key: 'EXTERIOR_DOORS', value: 'Work on exterior doors' },
  { id: '888', key: 'RE_ROOFING', value: 'Re-roofing' },
  {
    id: '999',
    key: 'FENCE_LESS_THAN_6_FEET',
    value: 'Building fences less than 6 feet',
  },
  { id: '012', key: 'OTHER', value: 'Other' },
];

export const PermitRequirement: PermitRequirementType = {
  IN_HOUSE_REVIEW: 'In-house review process is required.',
  OTC_WITH_PLANS: 'OTC review process with plans is required.',
  OTC_WITHOUT_PLANS: 'OTC review process without plans is required.',
  NO_REQUIREMENT: 'No building permit is required.',
};

export enum ReviewProcessStep {
  BUILDING_PERMIT = 'A building permit is required.',
  APPLICATION_WITH_PLANS = 'Prepare your application and plan sets are required.',
  APPLICATION_WITHOUT_PLANS = 'Prepare your application - no plan sets required.',
  SUBMIT_IN_HOUSE = 'Submit application for in-house review.',
  SUBMIT_OTC = 'Submit application for OTC review.',
  NOTHING_REQUIRED = 'Nothing is required! You’re set to build.',
}
