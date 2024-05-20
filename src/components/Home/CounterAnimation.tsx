import { motion, useAnimation, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface propsSchema {
  value: number;
}


function CounterAnimation (props: propsSchema ){
    const duration = 2;
    const controls = useAnimation();
    const [ displayValue, setDisplayValue ] = useState(1);

    const spring = useSpring(1, {duration: duration * 2000}); // For smoother transition
    
    useEffect(() => {
        controls.start({
            x: 0,
            transition: { duration },
        });
        spring.set(props.value);
        const onClickHandle = spring.on("change", (v) =>{
            setDisplayValue(Math.floor(v)); 
        })
        return () => onClickHandle();

    }, [controls, props.value, duration, spring,]);
   
   
    
  
const formattedValue = new Intl.NumberFormat().format(displayValue);
  return (
    <motion.span
      initial={{ x: -100 }}
      animate={controls}
    //   onClick={handleClick}
      onAnimationComplete={() => controls.set({  x: 0 })}
    >
      {formattedValue}
    </motion.span>
  );
};

export default CounterAnimation;
