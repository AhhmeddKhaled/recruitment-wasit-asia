import { useEffect, useState } from "react";

export function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [dataLength,setDataLenght] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
        setDataLenght(json.length);

      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, setData, dataLength, loading, error };
}
