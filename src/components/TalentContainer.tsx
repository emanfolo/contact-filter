import { Talent, TalentContainerProps } from "../types/interfaces"
import example from "../data/example.json"
import filter from "../utils/filter"

const TalentContainer = (props: TalentContainerProps) => {
  const {filterParams} = props

  const filteredTalents = filter(example, filterParams)

  const talentDisplay = filteredTalents.map((talent: Talent) => {
    return <> {talent.location} </>
  })

  return ( <>
    I am a talent container
  </>)
}

export default TalentContainer