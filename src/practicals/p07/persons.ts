import { error } from "console";
import { Agent } from "http";

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
  try{
  const result = persons
  .filter(persons => persons.age>0 && persons.age<100) 
  .filter(persons => persons.age !== null && persons.age !== undefined )
  .filter(persons => persons.firstName !== null && persons.firstName !== undefined && persons.firstName !== "")
  .filter(persons => persons.lastName !== null && persons.lastName !== undefined && persons.lastName !== "")
  .map(persons => ({
    firstName: persons.firstName ,
    lastName: persons.lastName ,
    age: persons.age
  }))
  return result.sort((a,b) => a.age - b.age)
  }catch (error) {
    throw error
  }
}

console.log(sortPersons(persons))