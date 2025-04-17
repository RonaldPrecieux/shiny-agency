import { Outlet, Link } from 'react-router'

function Survey() {
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <Link to="client">Questionnaire Client</Link>
      <Link to="freelance">Questionnaire Freelance</Link>
      <Outlet />
      <Link to="/survey/42">Questionnaire</Link>

    </div>
  )
}
export default Survey