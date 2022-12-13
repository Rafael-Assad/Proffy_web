import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImWarning } from 'react-icons/im'

import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'
import Select from '../../components/Select'
import TextArea from '../../components/TextArea'

import { optionsList, weekDays } from '../../helpers/constants'
import api from '../../services/api'

import './style.scss'

const TeachersRegister = () =>{
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')
  const [subject, setSubject] = useState('')  
  const [cost, setCost] = useState('')


  const [ scheduleItems, setScheduleItems ] = useState([
    { week_day: 0, from:'', to: '' }
  ])

  const newCalss = {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule: scheduleItems
  }

  const setNewScheduleItem = () =>{
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from:'', to: '' }
    ])
  }

  const handleScheduleChanges = (position: number, field: string, newValue: string) => {
    const scheduleEntries = scheduleItems.map((scheduleItem, index) => {
      if(position === index){
        if(field === 'week_day'){
          return {...scheduleItem, [field]:parseInt(newValue)}
        } 
        else if (field === 'from' || field === 'to'){
          let [hours, minutes] = newValue.split(':').map(Number)

          let roundMinutes:string | number = Math.round(minutes/5) * 5

          switch (roundMinutes) {
            case 60:
              roundMinutes = '00'
              hours += 1
              break;

            case 0:
              roundMinutes = '00'
              break;

            case 5:
              roundMinutes = '05'
              break;

            default:
              break;
          }

          const finalTime = [hours, roundMinutes].join(':')

          return {...scheduleItem, [field]:finalTime}
        }
      }

      return scheduleItem
    })

    setScheduleItems(scheduleEntries)
  }

  const handleSubmit = async ( event: FormEvent) =>{
    event.preventDefault()

    await api.post('classes', newCalss)
      .then(() => {
        alert("Cadastro Realizado com Sucesso!")

        navigate('/')
      }).catch(error => {
        console.error(error)
        alert('Erro no cadastro!')
      })
  }

  return (
    <div id="teacher-register" className="container">
    <PageHeader title="Que incrível que você quer dar aulas."
      description='O primeiro passo é preencher o formulário abaixo!'
    />

    <main>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Seus Dados</legend>
          <Input name="name" 
            label="Nome Completo" 
            value={name}
            onChange={ event => setName(event.target.value) }
          />

          <Input name="avatar" 
            label="Avatar" 
            value={avatar}
            onChange={ event => setAvatar(event.target.value) }
          />

          <Input name="whatsapp" 
            label="Whastapp" 
            value={whatsapp}
            onChange={ event => setWhatsapp(event.target.value) }
          />

          <TextArea name="bio" 
            label="Biografia"
            value={bio}
            onChange={ event => setBio(event.target.value) }
          />
        </fieldset>

        <fieldset>
          <legend>Sobre Suas Aulas</legend>
          <Select name="subject" 
            label="Matéria"
            options={optionsList}
            value={subject}
            onChange={ event => setSubject(event.target.value) }
          />

          <Input name="cost" 
            label="Valor da sua Hora/Aula" 
            value={cost}
            onChange={ event => setCost(event.target.value) }
          />
        </fieldset>

        <fieldset>
          <legend>
            Horários Disponíveis
            <button type='button' onClick={setNewScheduleItem}>
              + Novo Horário
            </button>
          </legend>

          {scheduleItems.map((scheduleItem, index) =>{
            return (
              <div key={index} className="schedule-item">
                <Select name="week_day" 
                  label="Dia da Semana"
                  options={weekDays}
                  value={scheduleItem.week_day}
                  onChange={(event) => handleScheduleChanges(index, "week_day", event.target.value)}
                />

                <Input name="from" 
                  label="Das" 
                  type="time"
                  value={scheduleItem.from}
                  onChange={(event) => handleScheduleChanges(index, "from", event.target.value)}
                />

                <Input name="to" 
                  label="Até" 
                  type="time"
                  value={scheduleItem.to}
                  onChange={(event) => handleScheduleChanges(index, "to", event.target.value)}
                />
              </div>
            )
          })}
        </fieldset>

        <footer>
          <p>
            <ImWarning/>
            Importante!<br/>
            Preencha Todos os dados
          </p>

          <button type="submit">
            Salvar Cadastro
          </button>
        </footer>
      </form>
    </main>
  </div>
  )
}

export default TeachersRegister