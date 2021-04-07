import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setError(null);
          setData(data);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        });
    }, 5000);
  }, [url]);

  return {
    loading,
    error,
    data,
  };
};

export default useFetch;
