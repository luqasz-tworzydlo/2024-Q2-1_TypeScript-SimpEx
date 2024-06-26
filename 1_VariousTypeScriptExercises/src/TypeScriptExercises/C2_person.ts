export class Person {
    public name: string
    public age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    
    public toString(): string {
        return this.name + ", " + this.age
    }
}