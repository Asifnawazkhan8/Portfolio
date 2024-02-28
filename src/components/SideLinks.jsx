
import { motion } from 'framer-motion'

import { slideIn, } from '../utils/motion'

import { useState } from 'react';
const SideLinks = () => {
   const [open, setOpen] = useState(true);
 return (
    <div
         className='fixed md:mr-6 mr-2 my-auto right-0
           bottom-5 z-20 flex flex-col gap-1 justify-end'
     >
        
       <motion.div
          ariants={
            slideIn('right', "up", 7, 6)}
          
          className={`${!open ? 'opacity-0' : 'opacity-100 -translate-y-8'}  rounded-[30px]  
          shadow-[#915eff] p-[1px] shadow-md green-pink-gradient
            duration-300
          `} >
          <div className='px-1 py-4  flex-col gap-5 flex justify-center
             items-center
             rounded-[30px] bg-tertiary'>
               <a className='tooltip linkdin' target="_blank"
                     href='https://www.linkedin.com/in/laiba-abbas-8938a01a5/'>
                <span className="tooltipText ld">Linkedin</span>
                <i className="fa fa-linkedin" aria-hidden="true"></i>
             </a>
             <a className='tooltip github'
                     href='https://github.com/laibaabbas/' target="_blank">
                <span className="tooltipText git">GitHub</span>
                <i className="fa fa-github"></i>
               </a>
               <a className='tooltip mail' target="_blank"
                     href="mailto:laibaabbasv@gmail.com">
                <span className="tooltipText ml">Email</span>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
             </a>
             
             <a className='tooltip d-cv'
                     href="/laibaAbbas-CV.pdf" download >
                <span className="tooltipText cv">Download_CV</span>
                <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
               </a>
                </div>
            
         </motion.div>
         <div className='rounded-full 
         transition-all hover:shadow-md
          shadow-[#915eff] p-[1px] drop-shadow-sm green-pink-gradient' >
             <div className='px-2 py-2 rounded-full bg-tertiary w-full h-full
             flex justify-center  tooltip'
             onClick={() => setOpen(!open)}
          >
             {/* <span className="tooltipText op">{open ? "Close " : "Open"}</span> */}
             {open ?
                <i className="fa fa-minus" ></i>
                 :<i className="fa fa-plus" ></i>}
                  
             </div>
            
         </div>
        
      </div>
 )
}

export default SideLinks