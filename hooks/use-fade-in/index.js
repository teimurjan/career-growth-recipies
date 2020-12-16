import { useState, useEffect } from "react";

export default ({ delay, active, onComplete } = {}) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (!delay) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setOpacity(1);
      onComplete && onComplete();
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!opacity && active) {
      setOpacity(1);
    }
  }, [active]);

  return { opacity, transition: "opacity 1000ms ease-in-out" };
};
