import { useEffect } from "react";

function useClickOutside( variable,callback) {
  useEffect(() => {
    if (variable) {
      document.addEventListener("mouseup", callback);
    } else {
      document.removeEventListener("mouseup", callback);
    }
    return () => {
      document.removeEventListener("mouseup", callback);
    };
  }, [variable]);
}

export default useClickOutside;
