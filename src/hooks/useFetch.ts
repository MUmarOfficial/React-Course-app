import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError(`Error: ${response.statusText}`);
          setLoading(false);
          return;
        }
        const result = await response.json();
        setData(result);
      } catch (err: unknown) {
        setError(
          `Error parsing JSON: ${
            err instanceof Error ? err.message : "Unknown error"
          }`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Don't forget this line!
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
