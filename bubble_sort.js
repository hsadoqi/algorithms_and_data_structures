const arr = [2, 8, 5, 2, 6]

// [2, 8] => [2, 8, 5, 2, 6]
// [2, 8, 5] => [2, 5, 8, 2, 6]
// [2, 5, 8, 2] => [2, 5, 2, 8, 6]
// [2, 5, 2, 8, 6] => [2, 5, 2, 6, 8] 

// [2, 5] => [2, 5, 2, 6, 8] 
// [2, 5, 2] => [2, 2, 5, 6, 8]
// [2, 2, 5, 6] => [2, 2, 5, 6, 8]

// [2, 2] => [2, 2, 5, 6, 8]


function bubbleSort(array){
    let swapped = true 

    while(swapped){
        swapped = false

        for(let i = 0; i < array.length; i++){
            if(array[i] > array[i+1]){
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                swapped = true
            }


        }
    }

    return array


}

bubbleSort(arr)

// O(n^2)


function consoleSomeStuff(arr){
    for(let i = 0; i < 2; i++){
        console.log(arr[i])
    }
}

// consoleSomeStuff([1, 2, 3, 4, 5, 5, 6, 6, 7, 6, 8])

// O(1)
// no matter what is being passed in, will only run 10 times

function consoleSome(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
        count += 1
    }

    console.log("count", count)
}

consoleSome([1, 2, 3, 5])

consoleSome([32, 32763, 324, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

// n === the input being passed into the function
// O(n) because it will run depending on the size of the input 

function consoleOther(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

// O(n)


function runningOutOfNames(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 1; j < arr.length; j++){
            console.log(arr[i], arr[j])
        }
    }
}

// O(n^2)

runningOutOfNames(arr)