import { useState } from "react"
import jsonFilter from "../utils/filter"
import SearchBar from "./SearchBar"
import TalentContainer from "./TalentContainer"




const Home = () => {
  const [filterParams, setFilterParams] = useState("")
  // const [talentType, setTalentType] = useState("")

  return <>
  <div className="homeLayout">
    <div className="leftSection">
      <SearchBar filterParams={filterParams} setFilterParams={setFilterParams}/>
    </div>
    <div className="rightSection">
      <TalentContainer filterParams={filterParams}/>
    </div>
  </div>
  </>
}

export default Home