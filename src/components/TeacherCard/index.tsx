import { ImWhatsapp } from 'react-icons/im'

import "./style.scss"

interface TeacherCardProps {
  name: string;
  subject: string;
  picSrc: string;
  description:string;
  price: number;
  whatsapp: string;
  otherContatcs?: any;
}

const TeacherCard = ({name, subject, picSrc, description, price, whatsapp, otherContatcs}: TeacherCardProps) =>{
  return (
    <article className="teacher-item">
      <header>
        <img src={picSrc} alt={name} />
        <div>
          <strong>{name}</strong>

          <span>{subject}</span>
        </div>
      </header>

      <p className='description'>
        {description}
        <br /><br />
        {description}
      </p>

      <footer>
        <p>
          Preço/Hora 
          <strong>R${price.toFixed(2)}</strong>
        </p>

        <button>
          <ImWhatsapp/>

          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherCard