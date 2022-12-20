import { ImWhatsapp } from 'react-icons/im'
import api from '../../services/api';

import "./style.scss"

export interface ClassDetails {
  id: number;
  name: string;
  subject: string;
  avatar: string;
  bio:string;
  cost: string;
  whatsapp: string;
}

const TeacherCard = ({id, name, subject, avatar, bio, cost, whatsapp}: ClassDetails) =>{
  const newConnection = async () => await api.post('connections', {user_id: id})

  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>

          <span>{subject}</span>
        </div>
      </header>

      <p className='description'>
        {bio}
      </p>

      <footer>
        <p>
          Preço/Hora 
          <strong>R${parseInt(cost).toFixed(2)}</strong>
        </p>

        <a href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noreferrer noopener"
          onClick={newConnection}
        >
          <ImWhatsapp/>

          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherCard