"use strict"

// Write an if condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.

let age = Number(prompt('How old are you ?'))
console.log(age)
if (age <= 0)
{
    console.log("Error: Enter a valid age")
}
else{

    if (age >= 14 && age <= 90)
{
    console.log("Well hellow you are somewhat between age 14 and 90")
}
else if (age < 14){

    console.log("You are below age 14")
}else if (age > 90){
    console.log("You are very old what is your diet")
}

}

// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

let userAge = Number(prompt("Enter your age"))

if (userAge <= 0)
{
    console.log("Error: Enter a valid age please !")
}
else{
    if (!(userAge >= 14 && userAge <= 90))
    console.log(`You are not between age 14 and 90, instead you are ${userAge} Years old` )
    
}

// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

let login = prompt("log in with you credentials")

if (login == 'Admin')
{
    let password = prompt("Input Your password")
    if (password == "TheMaster")
    {
        console.log('Welcome!')
    }
    else{
        console.log("Wrong Password")
    }
}
else if (login == '' || false)
{
    console.log("Canceled")
}
else{
    console.log("I don't know you")
}