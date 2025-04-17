import { useState } from 'react'
import { Outlet, Link } from 'react-router'
import { useParams } from 'react-router-dom'

function Survey() {
    const { questionNumber } = useParams()

    let [questionNum, setQuestionNum] = useState(Number(questionNumber)|| 1)


    function previousQuestion(){
        setQuestionNum(prev => prev > 1 ? prev - 1 : 1
        )
    }

    function nextQuestion(){
        setQuestionNum(prev => prev<10 ?prev +1 :10)

    }
        

    
  return (
    <><div>
          <h1>Questionnaire 🧮</h1>
          <p>Question {questionNum}</p>
          <Link to="/survey/42">Questionnaire {questionNumber} </Link><br></br>
          <Link to={`/survey/${Number(questionNum)}`} onClick={() => { previousQuestion() } }>Précédent</Link> <p></p>


          <Link to={`/survey/${Number(questionNum)}`} onClick={() => { nextQuestion() } }>S Suivant </Link><br></br>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
              {/* Liens pour la navigation */}
              <Link to={`/survey/${Number(questionNumber) > 1 ? Number(questionNumber) - 1 : 1}`}>Précédent</Link>
              <Link to={`/survey/${Number(questionNumber) < 10 ? Number(questionNumber) + 1 : 10}`}>Suivant</Link>
          </div></>

    
  )
}
export default Survey