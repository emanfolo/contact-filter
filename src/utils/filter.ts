import { Talent } from "../types/interfaces"

const jsonFilter = (json: Array<Talent>, filterParam: string) => {
  const regex = new RegExp(filterParam, "i");
  const filteredList = json.filter(talent => regex.test(talent.location))
  return filteredList
}

export default jsonFilter
