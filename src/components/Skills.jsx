import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { textVariant } from '../utils/motion'


const Skills = () => {
 return (
     <>
         <div className=' flex flex-col'>
         <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>
        My Skills
        </p>
        <h2 className={styles.sectionHeadText}>
        Technologies.
        </h2>
      </motion.div>
             <div className="flex flex-row flex-wrap 
      justify-center gap-12 mt-20 ">
        {technologies.map((technology) => (
          <>
                <div className="w-24 h-24 
            block-container 
            rounded-xl"
                    key={technology.name}>
                    <div className='btn-back rounded-xl ' />
                    <div className='btn-front bg-tertiary 
                    rounded-xl
                    flex justify-center items-center'>
                        <img src={technology.icon}
                            alt={technology.name}
                            className='w-1/2 h-1/2 object-contain'
                        />
                </div>
              </div>
          </>
        ))}
      </div> 
         </div>
    
     </>
 )
}

export default SectionWrapper(Skills, 'skills')