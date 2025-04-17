import Card from '../../components/Card'
import styled from 'styled-components'
//import DefaultPicture from '../../assets/profile.png'
const DefaultPicture = 'https://via.placeholder.com/150'
export default function Freelances() {
  const freelanceProfiles = [
    {
      name: 'Jane Doe',
      jobTitle: 'Devops',
      picture: DefaultPicture,
    },
    {
      name: 'John Doe',
      jobTitle: 'Developpeur frontend',
      picture: DefaultPicture,
    },
    {
      name: 'Jeanne Biche',
      jobTitle: 'Développeuse Fullstack',
      picture: DefaultPicture,
    },
  ]

  const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
  `
  return (
    <div>
      <h1>Freelances</h1>
      <p>Bienvenue sur la page des freelances !</p>
      <p>Voici les freelances disponibles :</p>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.DefaultPicture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  )
}
