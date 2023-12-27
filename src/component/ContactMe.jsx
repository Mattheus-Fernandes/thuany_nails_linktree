import "./ContactMe.css"
import { motion } from "framer-motion"

const ContactMe = ({close}) => {
  return (
    <motion.div 
    initial={{ right: 500, width: "100%"}}
    animate={{ right: 0 }}
    transition={{ duration: .8 }} 
      className='contactMe'>
      <p>Entre em contato</p>
      <nav>
        <ul>
          <li>
            <img className="icon" src="/instagram.png" alt="instagram" />
            <a href="https://www.instagram.com/thuanylnails/" target="_blank">Instagram</a>
          </li>
          <li>
            <img className="icon" src="/whatsapp.png" alt="whatsapp" />
            <a href="https://wa.me/5532988976877">WhatsApp</a>
          </li>
        </ul>
      </nav>
      <motion.div 
        initial={{right: 1000}}
        animate={{right:10}}
        transition={{duration: .9}}
        class="close" onClick={close}></motion.div>
      </motion.div>
  )
}

export default ContactMe