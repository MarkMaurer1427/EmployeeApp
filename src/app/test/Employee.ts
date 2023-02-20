export class Employee
{

    Id: number = 0;
    Name: string = "";
    Age: number = 0;
    Gender: string ="";

    constructor(id: number, name: string, age: number, gender: string)
    {
        this.Id = id
        this.Name = name
        this.Age = age;
        this.Gender = gender
    }

}