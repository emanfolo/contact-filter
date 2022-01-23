import { Talent } from "../types/interfaces";

// Create a method to deal with cases where there is more key value pairs than is need

const jsonFilter = (json: any[], filterParam: string): Talent[] => {
  // Empty array to store all talent objects that include the substring
  const filteredResults: Talent[] = [];

  // Function to ensure to exclude edge cases with incomplete or malformed data
  // I have ensured that a string is need for location and name as those are the two required outputs
  const hasCorrectFormat = (object: any): object is Talent => {
    return typeof object.location == "string" && typeof object.name == "string";
  };

  // Regular expression that checks the existence of the provided parameter, flag "i" for case insensitive
  const regex = new RegExp(filterParam, "i");

  // applyFilter function to store all talent objects whose location includes the provided substring
  const applyFilter = (talent: Talent) => {
    if (talent.location && regex.test(talent.location)) {
      filteredResults.push(talent);
    }
  };

  // for loop to iterate through the array of indiscriminate objects
  // conditional to check whether each index is in the correct format to be filtered
  // if index has correctly formatted data, the filter is applied, else a message explaining which data is malformed is output
  for (let i = 0; i < json.length; i++) {
    hasCorrectFormat(json[i])
      ? applyFilter(json[i])
      : console.log(
          `I am not in the correct format so index ${i} is being skipped`
        );
  }

  // array of Talent objects is being returned by the function
  return filteredResults;
};

export default jsonFilter;
