function printFirstItem(items){
    console.log(items[0])
}

// O(1) ("constant time")

function printAllItems(items){
    for(let i = 0; i < items.length; i++){
        console.log(items[i])
    }
}

printAllItems(["cookie", "cake", "salad"])

function printNTimes(n){
    for(let i = 0; i < n; i++){
        console.log("hello")
    }
}

printNTimes(5)

// O(n) relative to the value/size of the input

function printAllPairs(items){
    for(let i = 0; i < items.length; i++){
        for(let j = 1; j < items.length; j++){
            console.log(items[i], items[j])
        }
    }
}

// O(n^2)


function printAllItemsTwice(items){
    for(let i = 0; i < items.length; i++){
        console.log(items[i])
    }

    // O(n)


    for(let i = 0; i < items.length; i++){
        console.log(items[i])
    }

    // O(n)
}

// O(2n) => O(n)

function printSomeStuff(items){
    console.log(items[0])
    // O(1)

    const middleIndex = Math.floor(items.length / 2)
    let index = 0 

    while(index < middleIndex){
        console.log(items[index])
        index ++
    }

    // O(n/2)

    for(let i = 0; i < 100; i++){
        console.log('hi')
    }

    // O(100)
}

// O(1 + n/2 + 100) => O(n)


function printSomeMoreStuff(numbers){
    console.log("these are numbers")
    // O(1)

    for(let i = 0; i < numbers.length; i++){
        console.log(numbers[i])
    }

    // O(n)

    console.log("these are the sums")

    // O(1)

    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length; i++){
            console.log(numbers[i] + numbers[j])
        }
    }

    // O(n^2)

}

// O(1 + n + 1 + n^2) => O(n + n^2) => O(n^2)



// SPACE COMPLEXITY

function sayHiNTimes(n){
    for(let i = 0; i < n; i++){
        console.log('hi')
    }
}

// O(1) - we use a fixed number of variables

function arrayOfHiNTimes(n){
    const hiArray = []

    for(let i = 0; i < n; i++){
        hiArray[i] = 'hi'
    }

    return hiArray
}

// O(n)

function getLargestItem(items){
    let largest = 10
    for(let i = 0; i < items.length; i++){
        if(items[i] > largest){
            largest = items[i]
        }
    }

    return largest
}

// O(1)