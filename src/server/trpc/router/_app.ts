import { router } from '../trpc';
import { dataFetching } from './data';
import { exampleRouter } from './example';

export const appRouter = router({
  example: exampleRouter,
  data: dataFetching,
});

// export type definition of API
export type AppRouter = typeof appRouter;
