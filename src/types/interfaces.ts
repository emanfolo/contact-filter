export interface Talent {
  name: string, 
  location: string,
  date_of_birth: string
}

export interface SearchBarProps {
  filterParams: string
  setFilterParams: Function
}

export interface TalentContainerProps {
  filterParams: string
  // talentType: string
  // setTalentType: Function
}

export interface TalentCardProps {
  talent: Talent
}