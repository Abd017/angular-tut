export default class Person{


    constructor(private name: string = '', private email: string = ''){}

    /**
     * prints the person details
     */
    print(): void{
        console.log('Name : %s', this.name);
        console.log('Email : %s', this.email);
    }
}