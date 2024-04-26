import { Person } from "./C2_person"
import { PersonList } from "./C3_person-list"

//const person: Person = new Person("Nowak", 21)
//const res = person.toString()
//console.log(res)

const personA: Person = new Person("Nowak", 21)
const personB: Person = new Person("Prus", 20)
const personC: Person = new Person("Wąsik", 19)

const personList = new PersonList()
personList.addPerson(personA)
personList.addPerson(personB)
personList.addPerson(personC)

console.log(personList.toString())
