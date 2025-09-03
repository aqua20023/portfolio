import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion"
import { textVariant } from "../utils/motion"
import { styles } from "../styles"
import { div } from "framer-motion/client"


const Tech = () => {
  return (
    <div className="flex flex-col items-center gap-10">
    <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
    
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology)=>(
        <div className="w-28 h-28 " key={technology.name}>
          <BallCanvas icon={technology.icon} />
      </div>
      ))}
      
    </div>
    
    </div>
  )
}

export default SectionWrapper(Tech, "")