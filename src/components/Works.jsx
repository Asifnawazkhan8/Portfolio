import {Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';
import { github, view } from '../assets';



const ProjectCard = ({
  index, name, description, tags, image,
  source_code_link, web_link
}) => {
 return (
   <motion.div
    variants={fadeIn("up", "spring",
      0.5 * index, 0.75)}
   >
     <Tilt
       option={{
        max: 45,
        scale: 1,
        speed:450,
       }}

       className='bg-tertiary rounded-2xl sm:w-[360px]
          p-5 w-full'
     >
       <div className="w-full relative h-[230px]">
         <img src={image} alt={name}
           className='w-full h-full object-cover rounded-2xl'
         />

         <div className='absolute inset-0 flex justify-end
         gap-2
         card-img_hover m-3'>
          { source_code_link?  <div
             onClick={() => window.open(
               source_code_link, "_blank")}
             className='black-gradient w-10 h-10 rounded-full
             flex justify-center items-center cursor-pointer'
           >
             <img src={github} alt="github"
               className='w-1/2 h-1/2 object-contain'
             />
             
           </div>:<></>} 
           {web_link ?
             <div
             onClick={() => window.open(
               web_link, "_blank")}
             className='black-gradient w-10 h-10 rounded-full
             flex justify-center items-center cursor-pointer'
           >
             <img src={view} alt="view"
               className='w-1/2 h-1/2 object-contain'
             />
             
           </div>
           : <></>} 
         </div>
       </div>
       
       <div className='mt-5'>
         <h3 className='text-white font-bold text-[24px]'>
           {name}</h3>
         <p className='mt-2 text-secondary text-[14px]'>
           {description}
         </p>
       </div>

       <div className="mt-4 flex flex-wrap gap-2">
         {tags.map((tag) => (
           <p key={tag.name} className={`text-[14px] 
           ${tag.color}`}>
             #{tag.name}
           </p>
         ))}
       </div>
     </Tilt>
 </motion.div>
 )
}



const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>
          Project.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary
        text-[17px] max-w-3x1 leading-[30px]'
        >
          Following projects showcases my skills
          and experience throught real-world
          examples of my work. Each project is
          briefly described with links to code
          repositories and live demo in it.
          It reflects my ability to solve 
          complex problems, work with different
          technologies and frameworks
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap
       
      gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}
          index={index} {...project}
          />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, '')