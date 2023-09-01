import { useEffect, useState } from "react";


export const useRequest = (request: Function) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    request()
      .catch((error: string) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { loading, error };
};
