import React from "react";
import axios from "axios";
import { useEffect } from "react";

function LoadingScreen({ setLoading, setData }) {
  useEffect(() => {
    // Simulate a 4-second loading time
    const timer = setTimeout(() => {
      // Fetch data from the backend server
      axios
        .get("http://localhost:3001/data")
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }, 4000);

    return () => clearTimeout(timer); // Cleanup function to clear timeout if component unmounts
  }, [setLoading, setData]);

  return (
    <div className="loading-screen">
      <div className="loadingio-spinner-pulse-2by998twmg8">
        <div className="ldio-yzaezf3dcmj">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
