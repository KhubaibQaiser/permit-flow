import { trpc } from '@api/trpc/config';

const usePermitsListState = () => {
  const permitsData = trpc.permit.list.useQuery({ page: '1' });

  return permitsData;
};

export default usePermitsListState;
