// function definition
function doSomething(){
  console.log("Doing the thing")
  // explicit returns in JS
  return 2
}

// // calling the function
// doSomething()

// // reference to the function
// doSomething


function outerFunction(){
  console.log("OUTER")
  return function(){
    console.log("INNER!!!")
  }
}


// closure
function createTaxCalculator(percentage){
  return function(price){
    return price + price*percentage
  }
}

