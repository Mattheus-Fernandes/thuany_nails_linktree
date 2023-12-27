import "./CursoOnline.css"
import { motion } from "framer-motion"

export const CursoOnline = ({close}) => {
  return (
    <motion.div 
      initial={{ right: 500, width: "100%"}}
      animate={{ right: 0 }}
      transition={{ duration: .8 }} 
      className='cursoOnline'
    >
      <div className="overlay">
        <div>
          <h2>Em breve...</h2>
          <p>Estamos trabalhando para te entregar o melhor curso de <span>nail designer</span> online que você já viu.</p>
        </div>
        <p className="phrase">“O grande segredo de uma boa vida é encontrar qual é o seu destino. E realizá-lo”</p>
      </div>
      <motion.div 
        initial={{right: 1000}}
        animate={{right:10}}
        transition={{duration: .9}}
        class="close" onClick={close}></motion.div>
      </motion.div>
  )
}

export default CursoOnline