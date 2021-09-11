interface Player{
    name:string,
    club:string,
    salary:number,
    wife?:string,
    previousClubs?:string[]
}

const messy:Player ={
    name:"L Messy",
    club:'Abahoni',
    salary:12000,
    wife:'NOsimon ara begum'
}
const hanan:Player ={
    name:"MD hanan",
    club:'Kolabagan',
    salary:2000
}


interface Employee{
    name:string,
    designation:string,
    salary:number,
    age:number
}
interface Developer extends Employee{
    language:string[],
    codeEditor:string,
    typingSpeed:number
}
const Zuku:Developer={
    name:'Zukerbrug',
    designation:'CEO',
    salary:1000,
    age:35,
    language:['js','ts','py'],
    codeEditor:'VScode',
    typingSpeed:65
}