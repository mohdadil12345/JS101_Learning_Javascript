
// Problem 1

// Print "Masai School" in the console followed by "A Transformation in Education" in next line

console.log("Masai School")
console.log("A Transformation in Education")




//                  Problem 2

// Define a variable called name with your Name as the assigned value
// Print the value stored in the variable name
// Change the variable to store your father's name
// Print the value stored in the variable name
// Change the variable again to store your mother's name.
// Print the value stored in the variable name


let name = "Mohd Adil"
console.log(name)

father_name = "Mohd Murtaza"
console.log(father_name)

mother_name = "Ashrafi Bano"
console.log(mother_name)




//                           Problem 3


// Create a variable name to store your name
// Create a variable age to store your age
// Print the values stored in the variable on one line followed by the type of the variable in the next line

let name = "Mohd Adil"
let age = 24

console.log(name, age)
console.log(typeof(name), typeof(age))



//       PROBLEM : 4

// Store the name, school, grade, section, rollno and the marks scored by the student in 3 subjects
// Print the report card of the student (You can make it look nice by using some keyboard symbols )


let name = `
███╗░░░███╗░█████╗░██╗░░██╗██████╗░  ░█████╗░██████╗░██╗██╗░░░░░
████╗░████║██╔══██╗██║░░██║██╔══██╗  ██╔══██╗██╔══██╗██║██║░░░░░
██╔████╔██║██║░░██║███████║██║░░██║  ███████║██║░░██║██║██║░░░░░
██║╚██╔╝██║██║░░██║██╔══██║██║░░██║  ██╔══██║██║░░██║██║██║░░░░░
██║░╚═╝░██║╚█████╔╝██║░░██║██████╔╝  ██║░░██║██████╔╝██║███████╗
╚═╝░░░░░╚═╝░╚════╝░╚═╝░░╚═╝╚═════╝░  ╚═╝░░╚═╝╚═════╝░╚═╝╚══════╝`



let school = `🅰🅻🅸🅶🅰🆁🅷 🅼🆄🆂🅻🅸🅼 🆄🅽🅸🆅🅴🆁🆂🅸🆃🆈`

let section = `
░█████╗░
██╔══██╗
███████║
██╔══██║
██║░░██║
╚═╝░░╚═╝`



let roll_number = `
───────────────────────────────
─██████████████─██████████████─
─██░░░░░░░░░░██─██░░░░░░░░░░██─
─██░░██████████─██░░██████████─
─██░░██─────────██░░██─────────
─██░░██████████─██░░██████████─
─██░░░░░░░░░░██─██░░░░░░░░░░██─
─██████████░░██─██░░██████░░██─
─────────██░░██─██░░██──██░░██─
─██████████░░██─██░░██████░░██─
─██░░░░░░░░░░██─██░░░░░░░░░░██─
─██████████████─██████████████─
───────────────────────────────`


let maths_marks =  `
╭━━━┳━━━╮
┃╭━╮┃╭━╮┃
╰╯╭╯┃┃┃┃┃
╭╮╰╮┃┃┃┃┃
┃╰━╯┃╰━╯┃
╰━━━┻━━━╯`


let english_marks = `
███████████████████████████████
█░░░░░░██░░░░░░█░░░░░░░░░░░░░░█
█░░▄▀░░██░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░██░░▄▀░░█░░▄▀░░░░░░▄▀░░█
█░░▄▀░░██░░▄▀░░█░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░█░░▄▀░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░▄▀░░█░░▄▀░░░░░░▄▀░░█
█████████░░▄▀░░█░░▄▀░░██░░▄▀░░█
█████████░░▄▀░░█░░▄▀░░░░░░▄▀░░█
█████████░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█
█████████░░░░░░█░░░░░░░░░░░░░░█
███████████████████████████████`




let urdu_marks = `
███████████████████████████████
█░░░░░░░░░░░░░░█░░░░░░░░░░░░░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░▄▀░░░░░░▄▀░░█░░▄▀░░░░░░▄▀░░█
█░░▄▀░░██░░▄▀░░█░░▄▀░░██░░▄▀░░█
█░░▄▀░░░░░░▄▀░░█░░▄▀░░██░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░██░░▄▀░░█
█░░░░░░░░░░▄▀░░█░░▄▀░░██░░▄▀░░█
█████████░░▄▀░░█░░▄▀░░██░░▄▀░░█
█░░░░░░░░░░▄▀░░█░░▄▀░░░░░░▄▀░░█
█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█
█░░░░░░░░░░░░░░█░░░░░░░░░░░░░░█
███████████████████████████████`


console.log(name)
console.log(school)
console.log(section)
console.log(roll_number)
console.log(urdu_marks)
console.log(english_marks)
console.log(maths_marks)
