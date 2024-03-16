import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          setIsLoading(false);
        });
    };
    fetchData();
  }, []);
  return { data, isLoading };
};
export default useFetch;
