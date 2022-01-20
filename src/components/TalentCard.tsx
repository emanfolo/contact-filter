import { TalentCardProps } from "../types/interfaces"

const TalentCard = (props: TalentCardProps) => {
  const {talent} = props

  const now = new Date
  const todaysDate = now.toISOString().slice(0, -5)

  console.log(todaysDate)
  console.log(talent.date_of_birth)

  return <>
  <div>
    Name: {talent.name}
  </div>

  <div>
    Location: {talent.location}
  </div>

  <div>
    DOB: {talent.date_of_birth}
  </div>

  
  </>
}

export default TalentCard