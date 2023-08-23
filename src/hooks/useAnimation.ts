import { useEffect, useState } from "react";

function useAnimation(condition: boolean): [() => void, boolean] {
  const [isComplete, setComplete] = useState(false);

  useEffect(() => {
    if (condition) {
      setComplete(true);
    }
  }, [condition]);

  const animationTrigger = condition && isComplete;

  const handleTransitionEnd = () => {
    if (!condition) {
      setComplete(false);
    }
  };

  return [handleTransitionEnd, animationTrigger];
}

export default useAnimation;
