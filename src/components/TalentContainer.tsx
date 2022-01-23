import { Talent, TalentContainerProps } from "../types/interfaces";
import example from "../data/seedData.json";
import filter from "../utils/filter";
import TalentCard from "./TalentCard";

const TalentContainer = (props: TalentContainerProps) => {
  const { filterParams } = props;

  const filteredTalents = filter(example, filterParams);

  const talentDisplay = filteredTalents.map((talent: Talent, index) => {
    const key = `${talent.name}-${index}`;

    return (
      <>
        <div className="talentCard">
          <TalentCard talent={talent} key={key} />
        </div>
      </>
    );
  });

  if (filteredTalents.length >= 1) {
    return (
      <>
        <>
          <div className="talentCardContainer">{talentDisplay}</div>
        </>
      </>
    );
  } else {
    return (
      <>
        <div className="noResults">
          <h2>No results found</h2>
        </div>
      </>
    );
  }
};

export default TalentContainer;
