import { useCallback, useState, useEffect } from "react";

function useRoveFocus(size) {
  const [currentFocus, setCurrentFocus] = useState(0);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 39) {
        // left arrow
        e.preventDefault();
        setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
      } else if (e.keyCode === 37) {
        // right arrow
        e.preventDefault();
        setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
      }
    },
    [size, currentFocus, setCurrentFocus]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocus, setCurrentFocus];
}

export default useRoveFocus;
