import { Person } from "./C2_person"

export class PersonList {
    private people: Person[] = []

    public addPerson(person: Person) {
        this.people.push(person)
    }

    public removePerson(person: Person) {
        this.people = this.people.filter(item => item != person)
    }
    
    public findPerson(surname: string): Person | null {
        return this.people.find(person => person.name === surname) || null;
    }

    public minAge(): number {
        return Math.min(...this.people.map(person => person.age));
    }

    public maxAge(): number {
        return Math.max(...this.people.map(person => person.age));
    }

    public averageAge(): number {
        if (this.people.length === 0) return 0;
        const totalAge = this.people.reduce((acc, person) => acc + person.age, 0);
        return totalAge / this.people.length;
    }

    // Our second [improved] toString Method
    public toString(): string {
        const formattedPeople = this.people.map(person => ` -> ${person.toString()}`).join("\n")
        return `\n=> List of students:\n${formattedPeople}\n`
        + `\n=> The oldest student is ${this.maxAge()} years old, ` +
        `\n... while the youngest is ${this.minAge()} years old.`
    }    

    // Our first toString Method
    /*
    public toString(): string {
        return "=> List of students: \n" + this.people.map(item => item.toString()).join("\n")
    }
    */
}