/**
 * Data Structures 
 */

console.log(`*************************`)
console.log(`****  Exercise No. 1 ****`)
console.log(`*************************`)

//initial string
let strVar = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
let lines = [] //array to save the lines
let cells = [] //array to temporary save an array

//separate the string in an array.  
lines = strVar.split("\n")
console.log(lines)
//separate every line in cells and printed
for (i = 0; i < lines.length; i++) {
  cells = lines[i].split(",")
  console.log(` ${cells[0]} ${cells[1]} ${cells[2]} ${cells[3]}`)
}



/**
 * Exercise No. 2
 */

console.log(`*************************`)
console.log(`****  Exercise No. 2 ****`)
console.log(`*************************`)


//initial string
strVar = "ID,Name,Occupation,Age\n42,Bruce,Knight,41,otherthing\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"


lines = []//initialize rows array
cells = []//initialize columns array
savedArray = []//initialize 2D array

let columnQuantity//variable to saved the number of columns

//separate the string in arrays.  
lines = strVar.split("\n")

//Task #1.  Know how many columns are in the title row
cells = lines[0].split(",")

//we check the quantity of columns the title row has
columnQuantity = cells.length
console.log(`We have a quantity of: ${columnQuantity}`)

//this loop will work with any number of columns.
for (i = 0; i < lines.length; i++) {
  cells = lines[i].split(",")
  //if for some reason the lines after the title has more columns we can truncate the array
  if (cells.length > columnQuantity) {
    cells.length = columnQuantity
  }
  savedArray.push(cells)
}
console.log(`This is the 2D array`)
console.log(savedArray)


/**
 * Exercise No. 3
 */

console.log(`*************************`)
console.log(`****  Exercise No. 3 ****`)
console.log(`*************************`)

//I will use the savedArray from exercise 2

//declare a empty array to save the objects
let objectArray = []

//I made a double loop to tranlate every row in an object  
for (i = 1; i < savedArray.length; i++) {
  //create a new empty object in the array
  objectArray[i - 1] = {}
  //iterate the elements of the row to convert in properties of the object
  for (j = 0; j < savedArray[0].length; j++) {
    //First iteration it will be
    //objectArray[0][id]=42
    objectArray[i - 1][savedArray[0][j].toLowerCase()] = savedArray[i][j]
  }
}

console.log(objectArray)

/**
 * Exercise No. 4
 */

console.log(`*************************`)
console.log(`****  Exercise No. 4 ****`)
console.log(`*************************`)

//delete the last object of the array
objectArray.pop()

//Adding an object in the index 1
objectArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" })

//Adding an object at the end of the array
objectArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })


//print the modify object array
console.log(objectArray)

let averageAge = 0;
//sum all the ages
for (i = 0; i < objectArray.length; i++) {
  averageAge += parseInt(objectArray[i].age)
}
//calculate the average age
averageAge = averageAge / objectArray.length
console.log(`The average age is : ${averageAge} `)


/**
 * Exercise No. 5
 */
console.log(`*************************`)
console.log(`****  Exercise No. 5 ****`)
console.log(`*************************`)


//using Object.keys we can get the keys to be the first part of our string
let stringReverse = ''

//Adding keys at the beginning of the string
stringReverse = Object.keys(objectArray[0]).toString()

//Adding values after the titles and adding a \n between every line
for (i = 1; i < objectArray.length; i++) {
  stringReverse += '\\n'
  stringReverse += Object.values(objectArray[i]).toString()
}

console.log(stringReverse)
