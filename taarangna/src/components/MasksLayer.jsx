



// import { motion } from "framer-motion";
// import "./MasksLayer.css";

// import adbhut from "../assets/Adbhut.png";
// import bhayanak from "../assets/Bhayankar.png";
// import hasya from "../assets/Hasyaa.png";
// import karun from "../assets/Karun.png";
// import raudra from "../assets/Roudra.png";
// import shant from "../assets/Shant.png";
// import shringar from "../assets/Shringar.png";
// import vibhatsa from "../assets/Vibhatsa.png";
// import veer from "../assets/Vir.png";

// const masks = [
//   { src: adbhut, className: "mask m1" },
//   { src: bhayanak, className: "mask m2" },
//   { src: hasya, className: "mask m3" },
//   { src: karun, className: "mask m4" },
//   { src: raudra, className: "mask m5" },
//   { src: shant, className: "mask m6" },
//   { src: shringar, className: "mask m7" },
//   { src: vibhatsa, className: "mask m8" },
//   { src: veer, className: "mask m9" }
// ];

// export default function MasksLayer() {
//   return (
//     <div className="masks-container">
//       {masks.map((mask, index) => (
//         <motion.img
//           key={index}
//           src={mask.src}
//           className={mask.className}
//           alt="mask"

//           /* Start below screen */
//           initial={{ y: "100vh", opacity: 0 }}

//           /* Rise then float */
//           animate={{
//             y: [0, -12, 0],
//             opacity: 1
//           }}

//           transition={{
//             y: {
//               delay: index * 0.25 + 0.8,
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut"
//             },
//             opacity: {
//               duration: 1,
//               delay: index * 0.25
//             }
//           }}

//           whileHover={{ scale: 1.1 }}
//         />
//       ))}
//     </div>
//   );
// }











import { motion } from "framer-motion";
import "./MasksLayer.css";

import adbhut from "../assets/Adbhut.png";
import bhayanak from "../assets/Bhayankar.png";
import hasya from "../assets/Hasyaa.png";
import karun from "../assets/Karun.png";
import raudra from "../assets/Roudra.png";
import shant from "../assets/Shant.png";
import shringar from "../assets/Shringar.png";
import vibhatsa from "../assets/Vibhatsa.png";
import veer from "../assets/Vir.png";

const masks = [
  { src: adbhut, className: "mask m1", glow: "#7ef9ff" },
  { src: bhayanak, className: "mask m2", glow: "#5cff7a" },
  { src: hasya, className: "mask m3", glow: "#ffd54d" },
  { src: karun, className: "mask m4", glow: "#8a7cff" },
  { src: raudra, className: "mask m5", glow: "#ff3b3b" },
  { src: shant, className: "mask m6", glow: "#ffffff" },
  { src: shringar, className: "mask m7", glow: "#d16bff" },
  { src: vibhatsa, className: "mask m8", glow: "#6aa0ff" },
  { src: veer, className: "mask m9", glow: "#4da6ff" }
];

export default function MasksLayer() {
  return (
    <div className="masks-container">
      {masks.map((mask, index) => (
        <motion.img
          key={index}
          src={mask.src}
          className={mask.className}
          alt="mask"

          /* Glow matching mask color */
          style={{
            filter: `
              brightness(1.05)
              drop-shadow(0 0 8px ${mask.glow})
              drop-shadow(0 0 22px ${mask.glow})
              drop-shadow(0 0 40px ${mask.glow})
            `
          }}

          /* Start below screen */
          initial={{ y: "100vh", opacity: 0 }}

          /* Rise then float */
          animate={{
            y: [0, -12, 0],
            opacity: 1
          }}

          transition={{
            y: {
              delay: index * 0.25 + 0.8,
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: {
              duration: 1,
              delay: index * 0.25
            }
          }}

          whileHover={{ scale: 1.1 }}
        />
      ))}
    </div>
  );
}
