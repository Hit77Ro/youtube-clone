import React, { useEffect, useState } from "react";
import styles from "../style";

const Loader = ({ styling = "absolute inset-0" }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Add event listeners for online and offline events
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Remove event listeners when the component unmounts
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleOnline = () => {
    setIsOnline(true);
  };

  const handleOffline = () => {
    setIsOnline(false);
  };

  return (
    <div
      className={`h-full w-full bg-white text-[50px] font-bold text-red-500 ${styles.flexCenter} ${styling}`}
    >
      {isOnline ? (
        <div className="h-[50px] w-[50px] animate-spin rounded-full border-4 border-l-transparent"></div>
      ) : (
        <h1>Oops, you're offline</h1>
      )}
    </div>
  );
};

export default Loader;
