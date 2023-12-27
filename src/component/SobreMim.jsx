import "./SobreMim.css"
import { motion } from "framer-motion"

const SobreMim = ({close}) => {
  return (
    <motion.div 
    initial={{ right: 500, width: "100%"}}
    animate={{ right: 0 }}
    transition={{ duration: .8 }}
      className='boxMessage'>
      <p>
        Olá me chamo Thuany!
         <br /><br /> 
         Empreendedora aos 24 anos, atuo profissionalmente como <span>Nail Designer</span> há mais de 6 anos.
      </p>
      <p>
        Já formei <span className="greenWord">+400</span> alunas pelo mundo com o método de naturalidade, e eu proporciono as minhas alunas a entregar um resultado natural e resistente, para conquistar sua independencia financeira por meio das unhas. 
      </p>
      <motion.div 
        initial={{right: 1000}}
        animate={{right:10}}
        transition={{duration: .9}}
        class="close" onClick={close}></motion.div>
      </motion.div>
  )
}

export default SobreMim