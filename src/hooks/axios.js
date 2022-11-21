import Axios from "axios";
import { useCallback, useEffect, useState } from "react";

const axios = Axios.create({
  baseURL: "http://localhost:8080",
});

export const useAxios = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [called, setCalled] = useState(false);
  const [response, setResponse] = useState({
    error,
    loading,
    called,
    data,
  });

  const request = useCallback(
    async (config) => {
      setCalled(false);
      setLoading(true);
      setData(undefined);
      setError(undefined);

      config = {
        ...config,
        headers: {
          ...config?.headers,
        },
      };

      try {
        const res = await axios(config);
        setData(res?.data);

        return res;
        // eslint-disable-next-line no-useless-catch
      } catch (e) {
        const error = e?.response?.data?.message
          ? e?.response?.data?.message
          : e;
        setError(error);
        throw error;
      } finally {
        setCalled(true);
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    setResponse({
      error,
      loading,
      called,
      data,
    });
  }, [error, loading, data, called]);

  return [request, response];
};
