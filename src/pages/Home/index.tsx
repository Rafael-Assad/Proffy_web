import { Link } from "react-router-dom"

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import { BsBook } from 'react-icons/bs'
import { MdLiveTv } from 'react-icons/md'
import { ImHeart } from 'react-icons/im'

import './style.scss'

const Home = () => {
  return (
    <div id="home-page">
      <div id="home-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />

          <h2>
            Sua Plataforma de Estudos Online.
          </h2>
        </div>

        <img 
          src={landingImg} 
          alt="Plataforma de Estudos." 
          className='hero-image'
        />

        <div className="buttons-container">
          <Link to="study" className="study">
            <BsBook /> 
            Estudar
          </Link>

          <Link to="give-classes" className='give-classes'>
            <MdLiveTv />

            Dar Aulas
          </Link> 
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas

          <ImHeart/>
        </span>
      </div>
    </div>
  )
}

export default Home