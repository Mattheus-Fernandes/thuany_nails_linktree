import React from 'react'
import "./Navbar.css"
import { useState } from 'react';
import SobreMim from "../SobreMim"
import CursoOnline  from "../CursoOnline";
import ContacMe  from "../ContactMe";
import CursoPresencial  from "../CursoPresencial";
import { motion } from "framer-motion"

const Navbar = () => {
  

  const changeComponets = [
    {id: 1, change: "aboutMe"},
    {id: 2, change: "courseOnline"},
    {id: 3, change: "contactMe"},
    {id: 4, change: "cursoPresencial"}
  ]

  const [component, setComponent] = useState()
  
  const name = document.querySelector(".name")
  const teste = document.querySelector(".profile")
  const navbar = document.querySelector(".navbar")

  const aboutMe = () => {
    
    setComponent(changeComponets[0].change)
    
    const name = document.querySelector(".name")
    const teste = document.querySelector(".profile")
    const navbar = document.querySelector(".navbar")

    teste.classList.add("blur")
    navbar.classList.add("blur")
    name.classList.add("blur")
  }

  const courseOnline = () => {

    setComponent(changeComponets[1].change)
    
    const name = document.querySelector(".name")
    const teste = document.querySelector(".profile")
    const navbar = document.querySelector(".navbar")

    teste.classList.add("blur")
    navbar.classList.add("blur")
    name.classList.add("blur")
  }

  const contactMe = () => {
    setComponent(changeComponets[2].change)
    
    const name = document.querySelector(".name")
    const teste = document.querySelector(".profile")
    const navbar = document.querySelector(".navbar")

    teste.classList.add("blur")
    navbar.classList.add("blur")
    name.classList.add("blur")
    
  }

  const cursoPresencial = () => {
    setComponent(changeComponets[3].change)
    const name = document.querySelector(".name")
    const teste = document.querySelector(".profile")
    const navbar = document.querySelector(".navbar")

    teste.classList.add("blur")
    navbar.classList.add("blur")
    name.classList.add("blur")
  }

  const close = () => {
    setComponent("")
    teste.classList.remove("blur")
    navbar.classList.remove("blur")
    name.classList.remove("blur")
  }
  return (
    <>
      <nav className="navbar">
      <ul>
        <motion.li 
          initial={{x:100}}
          animate={{ x: 0}}
          transition={{ type: "spring", stiffness: 45 }}
          className='aboutMe' onClick={aboutMe}>
          <p>Sobre mim</p>
          <span>1</span>
        </motion.li>
        <motion.li
          initial={{x:100}}
          animate={{ x: 0}}
          transition={{ type: "spring", stiffness: 35 }}
        >
          <a  onClick={cursoPresencial}>
            Curso presencial
          </a>
          <span>2</span>
        </motion.li>
        <motion.li
          initial={{x:100}}
          animate={{ x: 0}}
          transition={{ type: "spring", stiffness: 25 }}
        >
          <a onClick={courseOnline}>Curso online</a>
          <span>3</span>
        </motion.li>
        <motion.li
          initial={{x:100}}
          animate={{ x: 0}}
          transition={{ type: "spring", stiffness: 15}}
        >
          <a onClick={contactMe}>Contate-me</a>
          <span>4</span>
        </motion.li>
      </ul>
    </nav>
    {component === "courseOnline" && <CursoOnline close={close}/>}
    {component === "aboutMe" &&  <SobreMim close={close} />}
    {component === "contactMe" && <ContacMe close={close} />}
    {component === "cursoPresencial" && <CursoPresencial close={close} />}
    </>
  )
}

export default Navbar