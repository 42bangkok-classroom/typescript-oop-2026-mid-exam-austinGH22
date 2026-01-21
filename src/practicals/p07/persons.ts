interface Person {
  firstName?: string;
  lastName?: string;
  age: number;
}

const persons: Person[] = [
  { firstName: "Somchai", lastName: "Jaidee", age: 30 },
  { firstName: "", lastName: "Test", age: 20 },
  { firstName: "Anan", lastName: "Sukjai", age: 25 },
  { firstName: "Somchai", lastName: "Dee", age: 25 },
  { firstName: "John", lastName: "Doe", age: 150 },
  { firstName: "Jane", lastName: "Smith", age: -5 },
  { lastName: "NoName", age: 40 }
];

export function sortPersons(persons: Person[]): Person[] {
  const result = persons
  .filter(persons => persons.age>0)
  .map(persons => ({
    firstName: persons.firstName ,
    lastName: persons.lastName ,
    age: persons.age
  }))
  return result.sort((a,b) => a.age - b.age)
}

console.log(sortPersons(persons))