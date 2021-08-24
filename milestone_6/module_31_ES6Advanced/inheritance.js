class TeamMember{
    name;
    address="BD";
    constructor(name,address){
        this.name=name;
        this.address=address
    }
}

class Support extends TeamMember{
    designation = 'Support Web Dev';
    groupSupportTime;
    constructor(name,address,time){
        super(name,address)
        this.groupSupportTime=time
    }
    startSession (){
        console.log(this.name,'Start a support session');
    }
}

class StudentCare extends TeamMember{
    designation = 'Care Web Dev';

    buildRoutine(student){
        console.log(this.name,'Build a routine for',student);
    }
}


class NaptureDev extends TeamMember{
    codeEditor;
    designation = 'Neptune App Dev';
    constructor(name,address,codeEditor){
        super(name,address)
        this.codeEditor = codeEditor
    }
    releaseApp(version){
        console.log(this.name,'release app version',version);
    }
}
const amir = new Support('amir khan',"BD",11);
const salman = new Support('salman khan',"DUBAI",4);
// console.log(amir);
// console.log(salman);
amir.startSession()
salman.startSession()

const alia = new StudentCare('alia bhat','Bombay')
const ash = new NaptureDev('Ashworiya','Bombay','Android Studio')
// console.log(alia);
// console.log(ash);
ash.releaseApp('1.4.5')

console.log(ash);