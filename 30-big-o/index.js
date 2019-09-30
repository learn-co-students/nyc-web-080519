function isInArray(array, target){
  for(let i=0; i<array.length; i++){
    console.log("RUNNING")
    if (array[i] === target){
      return true
    }
  }


  return false
}

const array = [7,9,10,3,98,2]

// An array of length 5 will run 5 times
// An array of length 1000 will run 1000 times
// The relationship of the size of the dataset to the number of operations is LINEAR (i.e. increases at the same rate)
// O(n) => linear time


function quadraticTime(array){
  for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
      console.log("RUNNING")
    }
  }
}

// An array of length 5 will run 25 times
// An array of length 1000 will run 1,000,000 times
// The relationship of the size of the dataset to the number of operations is QUADRATIC (i.e. increases at an EXPONENTIAL RATE)
// O(n^2) => quadratic time

function getTargetSum(array, target){
  let count = 0

  for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
      console.log("RUNNING")
      if((array[i] + array[j]) === target){
        count++
      }
    }
  }

  return count
}

function getTargetSum(array, target){
  let count = 0

  for(let i=0; i<array.length; i++){
    if(array.includes(target - array[i])){
      count++
    }
  }

  return count
}


