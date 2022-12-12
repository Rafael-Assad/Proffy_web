
import Input from '../../components/Input'
import PageHeader from '../../components/PageHeader'
import Select from '../../components/Select'
import TeacherCard from '../../components/TeacherCard'
import { optionsList, weekDays } from '../../helpers/constants'
import './style.scss'

const TeachersList = () =>{
  return (
    <div id="teacher-list" className="container">
      <PageHeader title="Estes São os Proffys Disponíveis." >
        <form action="" id="search-teachers">
          <Select name="subject" 
            label="Matéria"
            options={optionsList}
          />

          <Select name="week_day" 
            label="Dia da Semana"
            options={weekDays}
          />

          <Input name="time" label="Horário"  type="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherCard name='Tomas Turbando'
          subject='Sexo Avançado'
          picSrc='https://picsum.photos/200/300'
          description='Alguma coisa bem longa pra poder editar bem editado, depois eu vejo com algum texto com mais substancias'
          price={30}
          whatsapp=''
        />
      </main>
    </div>
  )
}

export default TeachersList