import {
  exteriorWorkOptions,
  interiorWorkOptions,
  workTypeOptions,
} from './db';
import { router, procedure } from '@server/trpc';
import { z } from 'zod';
import { workSchema, workTypeSchema } from './types';
import { getPermiRequirements } from './utils';

export const permitRoute = router({
  getWorkTypes: procedure.query(() => {
    return workTypeOptions;
  }),
  getInteriorWorkTypes: procedure.query(() => {
    return interiorWorkOptions;
  }),
  getExteriorWorkTypes: procedure.query(() => {
    return exteriorWorkOptions;
  }),
  getRequirements: procedure
    .input(
      z
        .object({
          workType: workTypeSchema,
          work: z.array(workSchema),
        })
        .optional()
    )
    .query(({ input }) => {
      if (!input) {
        return undefined;
      }
      return getPermiRequirements(input.workType, input.work);
    }),
});

export type PermitRouteType = typeof permitRoute;
