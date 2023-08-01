const input = require('prompt-sync')();

class Person {
      private personality: string;

    constructor(){
        this.personality = "friendly";
    }

    public askQuestion(answer:number){
        if(answer === 1){
            this.personality = "Extrovert";

        }else{
            this.personality = "Introvert";
        }

    }

    public getPersonality():string{
        return this.personality;
    }

}

class Student extends Person{
    private stuName: string;

    constructor(){
        super();
        this.stuName = "John";
    }

    public getStudentName():string{
        return this.stuName;
    }

    public setStudentName(name:string){
        this.stuName = name;
    }

}


const main =()=>{

    try{
    const person = new Person();
    const student = new Student();
    const answer = input("if you like to talk to other press 1 else press 2: ");    
    person.askQuestion(answer);

    const studentName = input("Enter your name: ");
    student.setStudentName(studentName);
    student.askQuestion(answer);
    console.log(`Hello ${student.getStudentName()}, You are a ${student.getPersonality()}`);
    }catch(e){
        console.log("please enter a valid number");
    }

}



main()