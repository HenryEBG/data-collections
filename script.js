/**
 * Data Structures 
 */

/**
 * Exercise No. 1
 */

//initial string
let strVar="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
let lines=[]
let cells=[]
//separate the string in an array.  
lines=strVar.split("\n")

for(i=0;i<lines.length;i++){
  //separate every line in cells and printed
  cells=lines[i].split(",")
  console.log(` ${cells[0]} ${cells[1]} ${cells[2]} ${cells[3]}`)
}


/**
 * Exercise No. 2
 */

//initial string
//initial string
strVar="ID,Name,Occupation,Age\n42,Bruce,Knight,41,otherthing\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
//initialize rows array
lines=[]
//initialize columns array
cells=[]
//initialize 2D array
savedArray=[]
//initialize 
let columnQuantity
//separate the string in an array.  
lines=strVar.split("\n")
//first task.  Know how many columns are in the title row
cells=lines[0].split(",")
console.log(`We have a quantity of: ${cells}`)
//we check the quantity of columns the title row has
columnQuantity=cells.length
console.log(columnQuantity)

for(i=0;i<lines.length;i++){
  cells=lines[i].split(",")
  //if for some reason the lines after the title has more columns we can truncate the array
 if(cells.length>columnQuantity){
  cells.length=columnQuantity
 }
  savedArray.push(cells)
}
console.log(`This is the 2D array`)
console.log(savedArray)


/**
 * Exercise No. 3
 */

//I will use the savedArray from exercise 2
//console.log(savedArray.length)
let columnheader=savedArray[0]
let objectArray=[]

for(i=1;i<savedArray.length;i++){
  objectArray[i-1]={}
  for(j=0;j<columnQuantity;j++){
   objectArray[i-1][columnheader[j].toLowerCase()]=savedArray[i][j]
  }
  
  
  //objectArray[i]=objectItem.assign()
}

console.log(objectArray)



