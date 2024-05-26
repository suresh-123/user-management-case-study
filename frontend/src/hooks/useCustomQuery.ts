import {
  QueryFunctionContext,
  QueryKey,
  useQuery,
  keepPreviousData,
} from "@tanstack/react-query";

export function useCustomQuery<T>(
  queryKey: QueryKey,
  queryFn: (context: QueryFunctionContext) => Promise<T>
) {
  return useQuery<T, Error>({
    queryKey,
    queryFn,
    placeholderData: keepPreviousData,
  });
}
