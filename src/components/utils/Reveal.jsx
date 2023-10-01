import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
export function Reveal({ children, width = "fit-content" }) {
  const ref=useRef(null);
  const isInView = useInView(ref, {root: true});

  const mainControls=useAnimation();
  // const slideControls=useAnimation();

  useEffect(()=>{
    if(isInView) {
      mainControls.sec("visible");
      console.log(isInView)
      //slideControls.start("");
    }
  },[isInView])
  return (
    <div ref={ref}style={{ position: "relative", width, overflow: "hidden", justifyContent:"center",alignItems:"center" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
          justifyContent:"center"
        }}
        initial="hidden"
        animate={mainControls}
        transition={{duration:0.5, delay:0.25}}
      >
        {children}
      </motion.div>
    </div>
  );
}


