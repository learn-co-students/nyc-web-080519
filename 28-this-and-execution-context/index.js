function sayName(greeting){
  console.log(this)
  for(let i=0; i<this.repetitions; i++){
    if (this.excited){
      console.log(`${greeting} says ${this.fullName}!!!`)
    } else {
      console.log(`${greeting} says ${this.fullName}`)
    }
  }
}

const arrowSayName = (greeting) =>{
  console.log(this)
  for(let i=0; i<this.repetitions; i++){
    if (this.excited){
      console.log(`${greeting} says ${this.fullName}!!!`)
    } else {
      console.log(`${greeting} says ${this.fullName}`)
    }
  }
}



// const matt = {
//   fullName: "Matt 'Happy Birthday' Masiello",
//   excited: true,
//   repetitions: 5,
//   sayName: sayName
// }

// const jon = {
//   fullName: "Jonathan Louey",
//   excited: false,
//   repetitions: 3,
//   sayName: sayName

// }

// const mason = {
//   fullName: "Mason Balbera",
//   excited: true,
//   repetitions: 8,
//   sayName: sayName
// }

 // V1 OOJS
// function makePerson(fullName, excited, repetitions){
//   return {
//     fullName: fullName,
//     excited: excited,
//     repetitions: repetitions,
//     sayName: sayName
//   }
// }

// const matt = makePerson("Matthew 'Vaporwave' Masiello", true, 5)
// const jon = makePerson("Jonathan Louey", false, 3)
// const mason = makePerson("Mason Balbera", true, 9)


// V2 OOJS
// constructor function
function Person(fullName, excited, repetitions){
  this.fullName = fullName,
  this.excited = excited,
  this.repetitions = repetitions,
  this.sayName = sayName
}


const matt = new Person("Matthew 'Vaporwave' Masiello", true, 5)
const jon = new Person("Jonathan Louey", false, 3)
const mason = new Person("Mason Balbera", true, 9)


// V3 OOJS
// class Person {
//   constructor(fullName, excited, repetitions){
//     this.fullName = fullName,
//     this.excited = excited,
//     this.repetitions = repetitions,
//   }

//   sayName(greeting){
//     console.log(this)
//     for(let i=0; i<this.repetitions; i++){
//       if (this.excited){
//         console.log(`${greeting} says ${this.fullName}!!!`)
//       } else {
//         console.log(`${greeting} says ${this.fullName}`)
//       }
//     }
//   }

// }

// const matt = new Person("Matthew 'Vaporwave' Masiello", true, 5)
// const jon = new Person("Jonathan Louey", false, 3)
// const mason = new Person("Mason Balbera", true, 9)

