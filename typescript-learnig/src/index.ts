

/*
Tpypescript version used in this project is : 6.0.0-dev.20260416
The TypeScript module system used in this project is : NodeNext
The TypeScript module resolution strategy used in this project is : NodeNext
The target version of JavaScript for this project is : ES2022
Library files that should be included in TypeScript compilation are : lib.es2022.d.ts

*/
// ------------------------------------------------------------------------------------

// javascript code

// let name = "San tola";
// let age = 23;
// let email = "stola@hengdebug.edu";
// let telphone = "012555358";

// typescript code

let name: string = "San tola";
let age: number = 23;
let email: string = "stola@hengdebug.edu";
let telphone = "012555358";
console.log(name,age,telphone);

console.log("-----------------------------------------------------------------------------");

// /defien array of objecg typescript 

const skill: string[] = ["javascript", "typescrip","ASP.NET WEB API", "java spring boot", "laravel"];
console.log(skill);

console.log("-----------------------------------------------------------------------------");



//  deifine object and create object 

interface Student  {
    id: number,
    name: string,
    email:string,
    phone?:string | null,
}

const student: Student = {

    id: 10,
    name: "san tola",
    email:"stola@example.com",
    phone: null
}



//  create method for getProperty obejct student 

function GetProp(student: Student): void {

console.log(student.id);
console.log(student.name);
console.log(student.email);
console.log(student.phone);
}

GetProp(student);

