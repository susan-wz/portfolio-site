import { useState, useEffect } from "react";

export const useIsMobileDevice = (): Boolean => {
  const [isMobile, setIsMobile] = useState(null)
  useEffect(() => {
    const isMobileDevice = () => {
      const { navigator } = window;
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i)
      ) {
        return true;
      } else {
        return false;
      }
    };
    setIsMobile(isMobileDevice())
  }, []);
  return isMobile
};
