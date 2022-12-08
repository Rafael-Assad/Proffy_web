import { Routes as Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import TeachersList from './pages/TeachersList'
import TeachersRegister from './pages/TeachersRegister'

const Routes = () =>{
  return (
    <Switch>
      <Route path="/"  element={ <Home/> }  />

      <Route path="/study" element={ <TeachersList/> } />

      <Route path="/give-classes" element={ <TeachersRegister/> } />
    </Switch>
  )
}

export default Routes