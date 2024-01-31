for (let i = 1; i <= 100; i++){
    console.log(i)
    printValue(i)
}
function printValue(num){
    if(num % 3 == 0 && num % 5 == 0){
        console.log("fizzbuzz");
    }
    else if(num % 3 == 0){
        console.log("fizz");
    }
    else if(num % 3 == 0){
        console.log("buzz");
    }
}