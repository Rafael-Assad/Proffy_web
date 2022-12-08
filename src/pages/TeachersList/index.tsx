import { Link } from 'react-router-dom'
import { MdArrowBackIos } from 'react-icons/md'
import logoImg from "../../assets/images/logo.svg"

import './style.scss'

const TeachersList = () =>{
  return (
    <div id="teacher-list" className="container">
      <header className="list-header">
        <div className="top-bar-container">
          <Link to="/">
            <MdArrowBackIos/>
          </Link>

          <img src={logoImg} alt="Proffy" />
        </div>

        <div className="header-content">
          <strong>Estes São os Proffys Disponíveis</strong>
        </div>
      </header>
    </div>
  )
}

export default TeachersList