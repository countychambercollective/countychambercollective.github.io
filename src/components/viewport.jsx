import { useEffect, useState } from "react";

function useViewport() {
  const [viewport, setViewport] = useState({
    vw: window.innerWidth,
    vh: window.innerHeight,
  });

  useEffect(() => {
    setViewport({
      vw: window.innerWidth,
      vh: window.innerHeight,
    });
  }, []);

  return viewport;
}