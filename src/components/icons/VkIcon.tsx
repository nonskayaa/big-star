import { motion } from "framer-motion";

import { iconAnimationVars } from "../../constants/animations/iconAnimationVars";

export default function VkIcon() {
  return (
    <motion.svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={iconAnimationVars}
      whileHover={"whileHover"}
    >
      <rect width="50" height="50" rx="25" fill="#704AB4" />
      <path
        d="M26.2281 33.75C16.8324 33.75 11.4733 27.1809 11.25 16.25H15.9564C16.111 24.273 19.5807 27.6714 22.329 28.3721V16.25H26.7606V23.1694C29.4745 22.8716 32.3259 19.7185 33.2878 16.25H37.7194C37.3569 18.0488 36.6344 19.7521 35.597 21.2531C34.5596 22.7542 33.2297 24.0208 31.6904 24.9737C33.4086 25.8444 34.9262 27.0769 36.1431 28.5897C37.36 30.1025 38.2485 31.8613 38.75 33.75H33.8718C33.4216 32.1095 32.5067 30.641 31.2417 29.5285C29.9767 28.4161 28.4179 27.7091 26.7606 27.4962V33.75H26.2281V33.75Z"
        fill="white"
      />
    </motion.svg>
  );
}
