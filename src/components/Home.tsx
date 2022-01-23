import { useState } from "react";
import SearchBar from "./SearchBar";
import TalentContainer from "./TalentContainer";

const Home = () => {
  const [filterParams, setFilterParams] = useState("");
  return (
    <>
      <div className="homeLayout">
        <div className="leftSection">
          <SearchBar setFilterParams={setFilterParams} />
        </div>
        <div className="rightSection">
          <TalentContainer filterParams={filterParams} />
        </div>
      </div>
    </>
  );
};

export default Home;
