"use strict"

let student = new Object()

let makeStudent = (name, course, school, country) => {
    return {
        name,
        course,
        school,
        country,
    }
}
let name = prompt("What is your name")
let course =prompt(`What do you study ${name} ??`)
let school = prompt("Where do you take that program in ?")
let country = prompt(`Final Question \n .....What country do you reside in ${name}`)

student = makeStudent(name, course, school, country)

console.log('Here is information about you that you provided')
console.log(student)

for (let key in student)
{
    if ("school" in student && student[key] == "USIU-Africa")
    {~~~
        console.log("Woww ! You studied at USIU, That is great")
    } else {
        console.log("That must be a new school !!")
    }
}