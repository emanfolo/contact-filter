import filter from "./filter";
import testCase1 from "../data/testCase1.json";
import testCase2 from "../data/testCase2.json";
import testCase3 from "../data/testCase3.json";
import testCase4 from "../data/testCase4.json";


// Testing whether the function returns an Array

test("it returns an array", () => {
  const result = filter(testCase1, "spring");
  expect(Array.isArray(result)).toBe(true);
});

// Testing whether the function returns an Array with all talents when a filter is not provided

test("it returns an array with all talents when a filter is not provided", () => {
  const result = filter(testCase1, "");
  expect(result.length).toBe(4);
});

// Testing whether the function can filter for only Springfield residents

test("it returns an array filtered by a location substring", () => {
  const result = filter(testCase1, "Spring");
  expect(result[0].location && result[1].location).toBe("SpringField");
});

// Testing whether the function can filter case insensitive

test("it returns an array filtered case insensitive by a location substring", () => {
  const result = filter(testCase1, "phIl");
  expect(result[0].location).toBe("Philidelphia");
});


// Testing that when a 'talent' object has a malformed name it is skipped using Testcase2

test("it excludes edge cases where talents name is not in the correct format", () => {
  const result = filter(testCase2, "spring");
  expect(result.length).toBe(1);
});


// Testing that when a 'talent' object has a malformed location it is skipped using Testcase3

test("it excludes edge cases where talents location is not in the correct format", () => {
  const result = filter(testCase3, "spring");
  expect(result.length).toBe(1);
});

// When data has an edge case of no input is returns an empty array

test("it returns an empty array when there is not input", () => {
  const result = filter(testCase4, "spring");
  expect(result.length).toBe(0);
});
