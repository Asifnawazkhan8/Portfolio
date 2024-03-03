import  { BrowserRouter }from 'react-router-dom';

import { Toaster} from 'react-hot-toast';
import { About, Contact, Experience, Hero, Navbar, Skills, StarsCanvas, Works } from './components';
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
          <Skills/>
          <Works />
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
