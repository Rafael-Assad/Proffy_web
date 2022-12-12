import { useState } from 'react'
import { ImWarning } from 'react-icons/im'
import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'
import Select from '../../components/Select'
import TextArea from '../../components/TextArea'
import { optionsList, weekDays } from '../../helpers/constants'

import './style.scss'

const TeachersRegister = () =>{
  const [ scheduleItems, setScheduleItems ] = useState([
    { week_day: 0, from:'', to: '' }
  ])

  const setNewScheduleItem = () =>{
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from:'', to: '' }
    ])
  }

  return (
    <div id="teacher-register" className="container">
    <PageHeader title="Que incrível que você quer dar aulas."
      description='O primeiro passo é preencher o formulário abaixo!'
    />

    <main>
      <fieldset>
        <legend>Seus Dados</legend>
        <Input name="name" label="Nome Completo" />

        <Input name="avatar" label="Avatar" />

        <Input name="whatsapp" label="Whastapp" />

        <TextArea name="bio" label="Biografia"/>
      </fieldset>

      <fieldset>
        <legend>Sobre Suas Aulas</legend>
        <Select name="subject" 
          label="Matéria"
          options={optionsList}
        />

        <Input name="cost" label="Valor da sua Hora/Aula" />
      </fieldset>

      <fieldset>
        <legend>
          Horários Disponíveis
          <button onClick={setNewScheduleItem}>
            + Novo Horário
          </button>
        </legend>
        {scheduleItems.map(scheduleItem =>{
          return (
            <div className="schedule-item">
              <Select name="week_day" 
                label="Dia da Semana"
                options={weekDays}
              />

              <Input name="from" label="Das" type="time" />
              <Input name="to" label="Até" type="time" />
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

        <button>
          Salvar Cadastro
        </button>
      </footer>
    </main>
  </div>
  )
}

export default TeachersRegister