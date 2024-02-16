import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook
  // step1: create 3 states: data, isLoading, error
  const [users, setUsers] = useState([]);
  const [isLoading, seIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // step2: fetch data & handle error
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Fetching not successful...');
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers(data);
        seIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        seIsLoading(false);
      });
  }, [url]);
  // step3: return 3 states
  return { users, isLoading, error };
};

export default useFetch;
