import { procedure, router } from '@server/trpc';
import { permitRoute } from './permit';

export const appRouter = router({
  healthcheck: procedure.query(() => 'yay!'),
  permit: permitRoute,
});

export type AppRouter = typeof appRouter;
