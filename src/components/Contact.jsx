import { useState, useRef } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { styles } from '../styles';
import { fadeIn, slideIn} from '../utils/motion'
import { SectionWrapper } from '../hoc';

import { EarthCanvas } from './canvas';


const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log([name], value);
    setForm({...form , [name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    ///GjvPZu-0dX2YGU3xq
    ///template_53h3wht
    ///service_0pajrjh
    
    emailjs.send(
      'service_0pajrjh',
      'template_53h3wht',
      {
        from_name: form.name,
        to_name: 'Asif Nawaz Khan',
        from_email: form.email,
        to_email: 'Asifnawazkhan8@gmail.com',
        message: form.message
      },
      'GjvPZu-0dX2YGU3xq'
    )
      .then(() => {
        setLoading(false)
        toast.success('Email Send Successfully.')
        toast.success('Thank You')
        setForm({
          name: '',
          email: '',
          message:'',
        })
      }, (error) => {
        setLoading(false);
        console.error(error);
        toast.error("Something went wrong")
    })
  }

  return (
    <div className='xl:mt-12 xl:flex-row 
    flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={
        slideIn('left', "between", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 
        rounded-2xl'
      >
          <p className={styles.sectionSubText}>
            Get in touch 
          </p>
          <h2 className={styles.sectionHeadText}>
            Contact.
        </h2>
        
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className="flex flex-col">
            <span className="text-white mb-4 font-medium">
            Your Name
            </span>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 text-white
              placeholder:text-secondary rounded-lg
              outline-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-white mb-4 font-medium">
            Your Email
            </span>
            <input
              type="email"
              name='email'
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 text-white
              placeholder:text-secondary rounded-lg
              outline-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-white mb-4 font-medium">
            Your Message
            </span>
            <textarea
              required
              minLength={10}
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you what to say?"
              className="bg-tertiary py-4 px-6 text-white
              placeholder:text-secondary rounded-lg
              outline-none border-none font-medium" />
          </label>
        

        <button
          type="submit"
          className='bg-[#cc0101] py-3 px-8 outline-none
          w-fit text-white font-bold shadow-md 
          shadow-primary rounded-xl'
        >
          {loading ? 'Sending':'Send'}
          </button>
        
          <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className=' text-secondary
        text-[17px] leading-[30px]'
          >Or Gmail Me Directly At&nbsp; 
            <a className='underline font-bold'
              href="asifnawazkhan8@gmail.com">
              Asifnawakhan8@gmail.com
            </a>
          </motion.p>
        </form>

        
      </motion.div>

      <motion.div variants={
        slideIn('right', "between", 0.2, 1)}

        className='xl:flex-1 xl:h-auto md:h-[550px]
        h-[350px]'
      >
        <EarthCanvas />
        
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')