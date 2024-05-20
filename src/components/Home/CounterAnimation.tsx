import { useEffect, useState } from "react";

interface PropsSchema {
  value: number;
}

const CounterAnimation: React.FC<PropsSchema> = ({ value }) => {
  const duration = 2000; // in milliseconds
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let animationStartTime: number;
    let animationFrameId: number;

    const startAnimation = (timestamp: number) => {
      animationStartTime = timestamp;
      animationFrameId = requestAnimationFrame(updateValue);
    };

    const updateValue = (timestamp: number) => {
      const elapsedTime = timestamp - animationStartTime;
      const progress = Math.min(elapsedTime / duration, 1);
      setDisplayValue(Math.floor(progress * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateValue);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    // Start animation on component mount
    animationFrameId = requestAnimationFrame(startAnimation);

    // Cleanup on unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration]);

  const handleClick = () => {
    // Reset value to 0
    setDisplayValue(0);
    // After a delay, start the animation again
    setTimeout(() => {
      let animationStartTime: number;
      let animationFrameId: number;

      const startAnimation = (timestamp: number) => {
        animationStartTime = timestamp;
        animationFrameId = requestAnimationFrame(updateValue);
      };

      const updateValue = (timestamp: number) => {
        const elapsedTime = timestamp - animationStartTime;
        const progress = Math.min(elapsedTime / duration, 1);
        setDisplayValue(Math.floor(progress * value));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateValue);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      };

      // Start animation after delay
      animationFrameId = requestAnimationFrame(startAnimation);
    }, 100); // Change the delay as needed
  };

  return (
    <span onClick={handleClick} style={{ cursor: "pointer" }}>
      {displayValue.toLocaleString()}
    </span>
  );
};

export default CounterAnimation;
