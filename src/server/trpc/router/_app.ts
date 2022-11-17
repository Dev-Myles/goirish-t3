import { router } from '../trpc';
import { dataFetching } from './data';

export const appRouter = router({
  data: dataFetching,
});

// export type definition of API
export type AppRouter = typeof appRouter;
