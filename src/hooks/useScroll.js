import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScroll() {
  const location = useLocation();
  useEffect(
    () => {
      window.scroll(0, 0);
    },
    [location.pathname]
  );
}
