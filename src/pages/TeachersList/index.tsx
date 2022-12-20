
import { FormEvent, useState } from 'react'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'

import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'
import Select from '../../components/Select'
import TeacherCard, { ClassDetails } from '../../components/TeacherCard'
import { optionsList, weekDays } from '../../helpers/constants'
import api from '../../services/api'
import './style.scss'

const TeachersList = () =>{
  const [classes, setclasses] = useState([])
  const [subject, setSubject] = useState('')
  const [weekDay, setWeekDay] = useState(0)
  const [time, setTime] = useState('')

  const handleSubmit = async (event: FormEvent) =>{
    event.preventDefault()

    await api.get('/classes',{params:{ subject, weekDay, time }})
      .then(response => setclasses(response.data))
      .catch(error => console.error(error))
  }

  return (
    <div id="teacher-list" className="container">
      <PageHeader title="Estes São os Proffys Disponíveis." >
        <form action="" id="search-teachers" onSubmit={handleSubmit}>
          <Select name="subject"
            label="Matéria"
            options={optionsList}
            value={subject}
            onChange={event => setSubject(event.target.value)}
          />

          <Select name="week_day"
            label="Dia da Semana"
            options={weekDays}
            value={weekDay}
            onChange={event => setWeekDay(parseInt(event.target.value))}
          />

          <Input name="time"
            label="Horário"
            type="time" 
            value={time}
            onChange={event => setTime(event.target.value)}
          />

          <button type="submit">
            <HiOutlineMagnifyingGlass/>
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {classes.map((classItem:ClassDetails) => {

          return (
            <TeacherCard key={classItem.id} id={classItem.id}
              name={classItem.name}
              subject={classItem.subject}
              avatar={classItem.avatar}
              bio={classItem.bio}
              cost={classItem.cost}
              whatsapp={classItem.whatsapp}
            />
            )
          })
        }
      </main>
    </div>
  )
}

export default TeachersList