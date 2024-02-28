import  { BrowserRouter }from 'react-router-dom';

import { Toaster} from 'react-hot-toast';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from './components';
import SideLinks from './components/SideLinks';

const App = ()=> {
  
  return (
    <>
        <Toaster/>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero/>
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas/>
          </div>

          <SideLinks/>
      </div>
      </BrowserRouter>
      
     
    </>
  )
}

export default App
