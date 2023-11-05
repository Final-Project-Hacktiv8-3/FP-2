import axios from "axios";
import { useEffect, useState } from "react";


export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/${url}`);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(error);
        setIsLoading(false);
      }
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${url}`);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};
