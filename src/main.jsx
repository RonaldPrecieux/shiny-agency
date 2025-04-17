import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter  as Router,Routes,Route} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/'
import Survey from './pages/Survey/Survey.jsx'
import Header from './components/Header'
import FreelanceForm from './components/FreelanceForm'
import ClientForm from './components/ClientForm'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />

      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/survey' element = {<Survey/>} >
        {/* Ces elements sont imbriqué dans survey */}
          <Route path='freelance' element={<FreelanceForm />} />
          <Route path='client' element={<ClientForm />} />

        </Route>
        <Route path="/survey/:questionNumber" element={<Survey />} />

      </Routes>
    </Router>
  </StrictMode>,
)
 