import Person from './person';

export default class Employee extends Person{
    constructor(private id: number = 0, name: string = '', email: string = '', private salary: number = 0){
        super(name, email);
    }

    print():void {
        console.log('Id : %s', this.id);
        super.print();
        console.log('Salary : %s', this.salary);
    }
}