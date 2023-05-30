"use strict"

/*
 This code asks user if they wich to check legal age of a person [if he/she has atained 18 Years or Not]
 If the user agrees to proceed to check legal ages he/she is asked to input age to check legality  else not prompted
 If user inputs a wrong age less than zero or not an age , the error is handled.
 If the person is less than 18 years or above 18 years , response is handled
 */

let ageChecker, ageRequest, age, calcAge 

 ageRequest = prompt("Do you want to check legal Ages ? Yes/No")

if (ageRequest== 'Yes')
{
    ageChecker = true
}
else if (ageRequest == 'No')
{
    ageChecker = false
}
else if (!(ageRequest == "Yes" || ageRequest == 'No'))
{
    alert("Error: Kindly input Yes or No : Refresh page to try again")
}
while(ageChecker)
{

    age = Number(prompt("Enter Age you wish to confirm Legality")) // 10
//Handling wrong age input
    if (age <= 0)
    {
        alert("Error: Kindly input a valid age")
      
    }
    else{
        calcAge = 18 - age  //18 - x = + (Not legal) | 18 - x = - (Legal) 
        if (calcAge > 0 )
        {
            console.log(`You are not legal at ${age} , you have got ${18 - age} more years to be legal`)
            ageChecker = false
        }
        else{
            console.log(`At ${age} Years , You are definately legal age`)
            ageChecker = false
        }
    }
}
