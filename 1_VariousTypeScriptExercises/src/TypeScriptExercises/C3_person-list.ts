import { Person } from "./C2_person"

export class PersonList {
    private people: Person[] = []

    public addPerson(person: Person) {
        this.people.push(person)
    }

    public removePerson(person: Person) {
        this.people = this.people.filter(item => item != person)
    }

    public toString(): string {
        return this.people.map(item => item.toString()).join("\n")
    }
}