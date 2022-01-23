import { TalentCardProps } from "../types/interfaces";

const TalentCard = (props: TalentCardProps) => {
  const { talent } = props;

  return (
    <>
      <div>{talent.name}</div>

      <div>{talent.location}</div>
    </>
  );
};

export default TalentCard;
