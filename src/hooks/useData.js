import apiClient from "../utils/api-client";
import { useState, useEffect } from "react";

const useData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message));
  }, []);
  return { data, error };
};

export default useData;
