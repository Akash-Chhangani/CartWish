import apiClient from "../utils/api-client";
import { useState, useEffect } from "react";

const useData = (endpoint, customConfig, deps) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    () => {
      setIsLoading(true);
      apiClient
        .get(endpoint, customConfig)
        .then((res) => {
          setIsLoading(false);
          setData(res.data);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    },
    deps ? deps : []
  );
  return { data, error, isLoading };
};

export default useData;
