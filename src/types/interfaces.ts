export interface Talent {
  name: string;
  location: string;
  date_of_birth?: string;
}

export interface SearchBarProps {
  setFilterParams(filterParams: string): any;
}

export interface TalentContainerProps {
  filterParams: string;
}

export interface TalentCardProps {
  talent: Talent;
}
