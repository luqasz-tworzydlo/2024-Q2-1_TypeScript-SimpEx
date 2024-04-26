import { Person } from "./C2_person"
import { PersonList } from "./C3_person-list"

//const person: Person = new Person("Nowak", 21)
//const res = person.toString()
//console.log(res)

const personA: Person = new Person("Nowak", 21)
const personB: Person = new Person("Prus", 20)
const personC: Person = new Person("Wąsik", 19)
const personD: Person = new Person("Łukaszenko", 23)
const personE: Person = new Person("Łukomska", 22)
const personF: Person = new Person("Ciavolli", 25)
const personG: Person = new Person("Polak", 27)

const personList = new PersonList()
personList.addPerson(personA)
personList.addPerson(personB)
personList.addPerson(personC)

personList.removePerson(personA,personB,personC)

personList.addPerson(personB,personD,personE,personF,personG)

console.log(personList.toString())
