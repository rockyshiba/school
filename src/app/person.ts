export class Person {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;

    /*getAge(): number{
        
        let currentDate = new Date();
        let age: number = currentDate.getFullYear() - this.dateOfBirth.getFullYear();
        
        if(
            this.dateOfBirth.getDate() > currentDate.getDate() &&
            this.dateOfBirth.getMonth() > currentDate.getMonth()
        ){
            age--;
        }

        return age;
    }*/
}
