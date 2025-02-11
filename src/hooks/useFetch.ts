/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useCallback } from 'react';

//#region TYPE
interface FetchOptions<T> {
  url: string;
  transformData?: (data: any) => T;
  requestOptions?: RequestInit;
}

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}
//#endregion


//#region EXPORT
export function useFetch<T = any>({ url, transformData, requestOptions }: FetchOptions<T>): FetchResult<T> {
    //#region STATE
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  //#endregion

  //#region METHODS
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) throw new Error(`Failed to fetch`);
      
      const rawData = await response.json();
      const transformedData = transformData ? transformData(rawData) : rawData;
      setData(transformedData);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [url, requestOptions, transformData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
//#endregion

  //#region RETURN
  return { data, loading, error, refetch: fetchData };
  //#endregion
}
//#endregion
