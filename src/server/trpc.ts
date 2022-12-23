import { initTRPC } from '@trpc/server';

const trpcInstance = initTRPC.create({});

export const { router, mergeRouters, middleware, procedure } = trpcInstance;
