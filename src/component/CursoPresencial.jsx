import "./CursoPresencial.css"
import { motion } from "framer-motion"

const CursoPresencial = ({close}) => {
  return (
    <motion.div 
    initial={{ right: 500, width: "100%"}}
    animate={{ right: 0 }}
    transition={{ duration: .8 }}
      className='cursoPresencial'>
      <p>
        Olá seja bem vinda, se chegou até aqui eu tenho certeza que você está no melhor lugar para se tornar uma <span>nail designer</span> de <span className="success">sucesso</span> ! 
      </p>
      <p className="myCourse">
        Meu curso presencial foi desenvolvido com o melhor método em naturalidade e tem mudado a vida de centenas de alunas . 
        Um curso com foco em naturalidade, totalmente prático e o melhor meu curso é vip, onde você terá total acesso aos meus conhecimentos, se você deseja alcançar sua independência financeira e se destacar no mercado clique aqui em baixo da agende o seu curso !
      </p>
      <a className="agendar" href='https://wa.me/5532988976877?text=Olá Thuany, gostaria de fazer agendamento do curso presencial'>
        AGENDAMENTO
      </a>
      <motion.div 
        initial={{right: 1000}}
        animate={{right:10}}
        transition={{duration: .9}}
        class="close" onClick={close}></motion.div>
      </motion.div>
  )
}

export default CursoPresencial