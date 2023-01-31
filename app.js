let nodePath = process.argv[0];
let appPath = process.argv[1];
let numbers = process.argv[2];


function simpleNumbers(numbers) {

    let myArray = []   

    for (let i=2; myArray.length < numbers; i++) {        
        for (let j=2; j <= i; j++) {
            if (i % j === 0 && j < i) {
                break;
        }
            else if (j === i) {
                myArray.push(i)
            }        
    }             

    }
    return myArray
}

//console.log(simpleNumbers(numbers))


