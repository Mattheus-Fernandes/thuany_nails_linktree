import './App.css';
import Navbar from './component/Navbar/Navbar';
import { motion } from "framer-motion"


function App() {

  return (
    <div className="App">
      <div className='profile'>
        <img src="thuany_image.png" alt="thuany" />
      </div>
      <motion.h1
        initial={{scale: 0}}
        animate={{scale: 1.2}}
        transition={{duration: .5}}
        className='name'
      >Thuany Nails</motion.h1>
      <Navbar />      
    </div>
  );
}

export default App;
