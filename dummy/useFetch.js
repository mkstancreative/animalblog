import { useState, useEffect } from "react";

function useFetch(url) {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // use effect clean up function
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        // checking for the promise
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not Fecth Data From This Resource");
          }

          // returning the response as a json 
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(false);

          // console.log(data);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
        
    }, 1000);

    return () => abortCont.abort();

  }, [url]);

  return { blogs, isPending, error };
}

export default useFetch;
