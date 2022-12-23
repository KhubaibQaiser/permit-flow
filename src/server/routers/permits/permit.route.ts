import { router, procedure } from '@server/trpc';
import { z } from 'zod';

const dummyData: Record<string, string[]> = {
  '1': ['permit-1', 'permit-2'],
  '2': ['permit-3', 'permit-4'],
};

export const permitRoute = router({
  list: procedure.input(z.object({ page: z.string() })).query(({ input }) => {
    return dummyData[input.page];
  }),
});

export type PermitRouteType = typeof permitRoute;
