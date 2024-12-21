// // There are two arrays. The first array consisting of countries, the second array consisting of the corresponding capitals. Write a function that can take a country and return its respective capital

// //Second one:

// //A person record has a name, a phone number(string), an age(number) and an address(string).
// //There are 10 such people. Here:
// //Write a function that finds all the people above the age of 20

// // Third one:

// // A person record has a name, a phone number(string), an age(number), an address(string) and another person record that refers to the name and the phone number of their guardian. Unlike the person record, the record for the guardian is ordered as phone number first and name second.

// // There are 10 such people. Here:
// // Write a function that finds all people who are younger than 30 years old. Return their names, their phone numbers, their guardians' name and phone number too.

// // Fourth one:

// // The structure of the person record has been updated. The details now appear in the following order:
// // - **Name** (string)
// // - **Age** (number)
// // - **Phone number** (number)
// // - **Address** (string)
// // - **Guardian** (a person record referencing the guardian's name and phone number)

// // Both the phone numbers (for the person and guardian) are now stored as numbers, not strings.

// // Given a list of 10 such person records, write a function to find the **names and ages of guardians** for people older than 20 years. Only include guardians whose names appear in the list of people. Guardians not present in the list should be excluded.
// // Aarav is the guardian of Ishaan, and Rohan is the guardian of Aarav.
// // Lakshmi is a guardian not belonging to the list.

// const modifiedRecords =
//   [
//     ["Aarav", 25, 9876543210, "123 MG Road, Mumbai", ["Rohan", 5432109876]],
//     ["Ananya", 35, 8765432109, "456 Brigade Road, Bengaluru", ["Lakshmi", 8223456781]],
//     ["Ishaan", 19, 7654321098, "789 Park Street, Kolkata", ["Aarav", 9876543210]],
//     ["Meera", 42, 6543210987, "101 Connaught Place, Delhi", ["Sunita", 8423456783]],
//     ["Rohan", 28, 5432109876, "202 Marine Drive, Chennai", ["Lakshmi", 7654321098]],
//     ["Priya", 31, 4321098765, "303 Sarjapur Road, Hyderabad", ["Geeta", 8623456785]],
//     ["Kavya", 18, 3210987654, "404 Carter Road, Pune", ["Aditya", 2109876543]],
//     ["Aditya", 45, 2109876543, "505 Residency Road, Ahmedabad", ["Vimala", 8823456787]],
//     ["Naina", 23, 1098765432, "606 MG Road, Jaipur", ["Meera", 6543210987]],
//     ["Veer", 37, 1987654321, "707 Lodhi Road, Chandigarh", ["Rajesh", 8723456786]]
//   ];

// const greaterThan20 = function (list) {
//   return list[1] > 20;
// };

// const isGuardianPresent = function (peopleOlderThan20) {
//   return function (list) {
//     return peopleOlderThan20.flat(1).includes(list[4][0]);
//   };
// };

// const getTheirAges = function (peopleOlderThan20) {
//   return function (init, list) {
//     const ageOfGuardian = peopleOlderThan20.indexOf(peopleOlderThan20.flat().find(function (x) {
//       return x === list[4][0];
//     }));
//     return [...init, [list[4][0], peopleOlderThan20[ageOfGuardian + 1]]];
//   };
// };

// const getPersonAndGuardian = function (modifiedRecords) {
//   const peopleOlderThan20 = modifiedRecords.filter(greaterThan20);
//   const guardiansPresent = peopleOlderThan20.filter(isGuardianPresent
//     (peopleOlderThan20)).map(function (element) {
//       return element[4][0];
//     });

//   return guardiansPresent.map(function (element) {
//     const index = modifiedRecords.flat().indexOf(element);
//     return [element, modifiedRecords.flat()[index + 1]];
//   });
// };

// // console.log(getPersonAndGuardian(modifiedRecords));

// const recordsWithGuardianDetails = [
//   ["Aarav", "9876543210", 25, "123 MG Road, Mumbai", ["9123456780", "Suresh"]],
//   ["Ananya", "8765432109", 35, "456 Brigade Road, Bengaluru", ["8223456781", "Lakshmi"]],
//   ["Ishaan", "7654321098", 19, "789 Park Street, Kolkata", ["8323456782", "Ramesh"]],
//   ["Meera", "6543210987", 42, "101 Connaught Place, Delhi", ["8423456783", "Sunita"]],
//   ["Rohan", "5432109876", 28, "202 Marine Drive, Chennai", ["8523456784", "Arun"]],
//   ["Priya", "4321098765", 31, "303 Sarjapur Road, Hyderabad", ["8623456785", "Geeta"]],
//   ["Kavya", "3210987654", 18, "404 Carter Road, Pune", ["8723456786", "Rajesh"]],
//   ["Aditya", "2109876543", 45, "505 Residency Road, Ahmedabad", ["8823456787", "Vimala"]],
//   ["Naina", "1098765432", 23, "606 MG Road, Jaipur", ["8923456788", "Ashok"]],
//   ["Veer", "0198765431", 37, "707 Lodhi Road, Chandigarh", ["9023456789", "Manju"]]
// ];

// const youngerThan30 = function (person) {
//   const ageIndex = 2;
//   return person[ageIndex] < 30;
// };

// const filterPeopleWithGuardian = function () {
//   const records = recordsWithGuardianDetails.filter(youngerThan30);
//   return records.map((record) => [record[0], record[1], record.at(-1)].flat());
// };

// // console.log(filterPeopleWithGuardian());

// const record = [
//   ["Alice", "9876543210", 25, "123 Elm Street, Springfield"],
//   ["Bob", "8765432109", 35, "456 Oak Avenue, Metropolis"],
//   ["Charlie", "7654321098", 19, "789 Pine Road, Gotham City"],
//   ["Diana", "6543210987", 42, "101 Maple Lane, Smallville"],
//   ["Eve", "5432109876", 28, "202 Birch Boulevard, Star City"],
//   ["Frank", "4321098765", 31, "303 Cedar Drive, Central City"],
//   ["Grace", "3210987654", 18, "404 Willow Way, Coast City"],
//   ["Hank", "2109876543", 45, "505 Aspen Circle, Riverdale"],
//   ["Ivy", "1098765432", 23, "606 Fir Terrace, Hill Valley"],
//   ["Jack", "0198765431", 37, "707 Spruce Court, Twin Peaks"]
// ];

// const isAbove20 = function (list) {
//   return list[2] > 20;
// };

// const filterRecords = function () {
//   return record.filter(isAbove20);
// };

// console.log(filterRecords());

const countries = ["India", "United States", "France", "Japan", "Brazil", "Australia", "Germany", "Canada", "Italy", "South Korea"];

const capitals = ["New Delhi", "Washington, D.C.", "Paris", "Tokyo", "Brasília", "Canberra", "Berlin", "Ottawa", "Rome", "Seoul"];

const makeObject = function () {
  const getCapitalOf = {};
  countries.map(function (country, index) {
    getCapitalOf[country] = capitals[index];
  });

  return getCapitalOf;
};

const getCapital = function (country) {
  const getCapitalOf = makeObject();
  return getCapitalOf[country];
};

const testGetCapital = function (country, expected, table) {
  const result = getCapital(country);
  const message = result === expected;
  table.push(([message, country, expected, result]));
};

const testCases = function () {
  const table = [];
  testGetCapital("Italy", "Rome", table);
  testGetCapital("India", "New Delhi", table);
  testGetCapital("United States", "Washington, D.C.", table);
  testGetCapital("France", "Paris", table);
  testGetCapital("Japan", "Tokyo", table);
  testGetCapital("Brazil", "Brasília", table);
  testGetCapital("Australia", "Canberra", table);
  testGetCapital("Germany", "Berlin", table);
  testGetCapital("Canada", "Ottawa", table);
  console.table(table);
};

testCases();