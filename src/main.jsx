import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter  as Router,Routes,Route} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home/'
import Survey from './pages/Survey/Survey.jsx'
import Results from './pages/Results/index.jsx'
import Header from './components/Header'
import FreelanceForm from './components/FreelanceForm'
import ClientForm from './components/ClientForm'
import Error from './components/Error'
import Freelances from './pages/Freelances/index.jsx'
import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`

    div {

        font-family: 'Trebuchet MS', Helvetica, sans-serif;

    }`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <GlobalStyle />
      <Header />

      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/survey' element = {<Survey/>} >
        {/* Ces elements sont imbriqué dans survey */}
          <Route path='freelance' element={<FreelanceForm />} />
          <Route path='client' element={<ClientForm />} />

        </Route>
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path='/results' element = {<Results />} />
      <Route path='/freelance' element = {<Freelances/>} />



       <Route path='*' element={<Error />} />


      </Routes>
    </Router>
  </StrictMode>,
)
 