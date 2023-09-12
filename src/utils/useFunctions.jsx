// useLoader.js
import { useEffect } from "react";
import { useStore } from "../Context/Context";

const useFunctions = () => {
  const { SetLoader, dispatch } = useStore();

  const startLoading = () => {
    dispatch({ type: SetLoader, payload: true });
  };

  const stopLoading = () => {
    dispatch({ type: SetLoader, payload: false });
  };

  useEffect(() => {
    startLoading();
    return stopLoading;
  }, []);

  return { startLoading, stopLoading };
};

export default useFunctions;
