import { useState } from "react"
import jsonFilter from "../utils/filter"
import SearchBar from "./SearchBar"
import TalentContainer from "./TalentContainer"




const Home = () => {
  const [filterParams, setFilterParams] = useState("")
  // const [talentType, setTalentType] = useState("")

  return <>
    <div className="topSection">
      <SearchBar filterParams={filterParams} setFilterParams={setFilterParams}/>
    </div>
    <div className="bottomSection">
      <TalentContainer filterParams={filterParams}/>
    </div>
  </>
}

export default Home