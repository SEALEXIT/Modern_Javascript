"use strict"

// Lets do a BMI check
//user inputs weight and height
//Calculate height and give relevant advice according to user's bmi.
//Below 18.5 ...Underweight
//''     18.5 - 24.9 ...Healthy Weight
// ""     25.0 - 29.9 ...Overweight
//""     30.0 And Above ...Obesity

let weight = Number(prompt(".....Let's check Your BMI .....\n ....Enter your weight (KG)"))
let height = Number(prompt(`..Your weight is ${weight}Kg....\n....Now Enter your Height(M)`))
let confirmation = prompt(`....Weight: ${weight}kg\n....Height: ${height}m..\n..Confirm if the above information is Correct`)

let BMI, userBMI

let culculateBmi = (weight, height) => {
    BMI = weight / (height * height)
    return BMI
}
do {

    userBMI = culculateBmi(weight, height)
    console.log(`Your BMI is ${userBMI}`)

   userBMI < 18.5 ? console.log("You are underweight") : userBMI <= 24.9 ? console.log("Healthy Weight") : userBMI <= 29.9 ? console.log("You are Overweight") : userBMI >= 30 ? console.log('You are Obese') : console.log('You are Not Human') 

   confirmation = false
} while(confirmation)

//Gym schedule timetable
//Mondays ... Quads and Hamstrings workourts
//Tuesday ... Chest and shoulder workout
//Wednesday ... Rest day
//Thursday ... arms, core(abs) and upper back workout
//Friday ...  Lower back, chest  and delts workout
//Saturday ... Legs and chest workout
//Sunday ..Rest day

let theDay = prompt("What day is today ?")

let checkWorkout = (theDay) => {
    console.log('.........DAYS OF THE WEEK........\n Monday\nTuesday\nWednesday\nThursday\nFriday\nSaturday\nSunday')
    switch(theDay) {
        case 'Monday':
            console.log("Today is Monday \n ...You are working out Quads and Hamstrings")
            break;
            case 'Tuesday':
                console.log("On Tuesdays You workout Chest and shoulders")
                break;
                case 'Wednesday':
                    console.log("You are to Rest today .")
                    break;
                    case 'Thursday':
                        console.log("Today is Thursday i hope you had a great restday Yesterday\n Today we workout Arms, Core(abs) and upper back")
                        break;
                        case 'Friday':
                            console.log("On Friday You are scheduled to work on Lower Back, Chest and the Delts")
                            break;
                            case 'Saturday':
                                console.log(".........Saturday.....\n We finish the week with Legs and chest Workout , Your favourites 😊🤣")
                                break;
                                case "Sunday":
                                    console.log('Sunday we take a rest as we resume the following week , Happy day recovering')
                                    break;
                                    default:
                                        console.log(`ERROR 🚫: ${theDay} is not part of the week or check spelling errors !! `)
    }
}
checkWorkout(theDay)