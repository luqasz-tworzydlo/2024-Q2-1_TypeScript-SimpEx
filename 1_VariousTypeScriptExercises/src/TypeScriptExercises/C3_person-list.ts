import { Person } from "./C2_person"

export class PersonList {
    private people: Person[] = []

    // Our second [improved] addPerson Method
    public addPerson(...persons: Person []) {
        this.people.push(...persons)
    }

    // Our first addPerson Method
    /*public addPerson(person: Person) {
        this.people.push(person)
    }*/

    // Our second removePerson Method
    public removePerson(...persons: Person[]) {
        this.people = this.people.filter(item => !persons.includes(item));
    }
    
    // Our first removePerson Method
    /*public removePerson(person: Person) {
        this.people = this.people.filter(item => item != person)
    }*/
    
    public findPerson(surname: string): Person | null {
        return this.people.find(person => person.name === surname) || null;
    }

    public getOldestPerson(): Person | null {
        if (this.people.length === 0) {
            return null;
        }
        return this.people.reduce((oldest, current) => oldest.age > current.age ? oldest : current);
    }
    public getYoungestPerson(): Person | null {
        if (this.people.length === 0) {
            return null;
        }
        return this.people.reduce((youngest, current) => youngest.age < current.age ? youngest : current);
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

    // Our third [improved] toString Method
    public toString(): string {
        const formattedPeople = this.people.map(person => ` -> ${person.toString()}`).join("\n")
        const oldestPerson = this.getOldestPerson()
        const youngestPerson = this.getYoungestPerson()

        let result = `\n=> List of students:\n${formattedPeople}\n`
        
        + `\n=> The average age of the students is ${this.averageAge().toFixed(2)}` +
        `\n...and their ages range from ${this.minAge()} to ${this.maxAge()} years old. \n`

        if (oldestPerson && youngestPerson) {
            result += `\n=> The oldest student is ${oldestPerson.name}, ${oldestPerson.age} years old, ` +
                      `\n... while the youngest is ${youngestPerson.name}, ${youngestPerson.age} years old.\n`
        } else {
            result += "\n=> No students available to evaluate.\n"
        }
        return result
    }

    // Our second toString Method
    /*
    public toString(): string {
        const formattedPeople = this.people.map(person => ` -> ${person.toString()}`).join("\n")
        return `\n=> List of students:\n${formattedPeople}\n`
        + `\n=> The oldest student is ${this.maxAge()} years old, ` +
        `\n... while the youngest is ${this.minAge()} years old.`
    }
    */    

    // Our first toString Method
    /*
    public toString(): string {
        return "=> List of students: \n" + this.people.map(item => item.toString()).join("\n")
    }
    */
}