import {motion} from "framer-motion";
import {Outlet} from "react-router-dom";
import ScrollToTop from "../scrollTop/ScrollToTop";

const opacityAnimation = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const NavigateTransition = () => {
  // console.log("안녕하세요. 모션 적용 ~ 키키");
  return (
    //pade-in-ani
    <motion.div
      initial={"out"}
      animate={"in"}
      exit={"in"}
      variants={opacityAnimation}
      transition={{
        ease: "easeInOut",
        duration: 0.3,
      }}
      className={["navigate_transition_overlay"].join(" ")}
    >
      {/* // * App.js 에서 scroll top 하면 애니메이션 안먹습니다 ~ 여기서 해야함  */}
      <ScrollToTop />
      <Outlet />
    </motion.div>
  );
};

export default NavigateTransition;
