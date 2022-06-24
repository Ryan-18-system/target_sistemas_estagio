const fibonacci = (num) =>{
    if (num <= 1) return 1;
    console.log(fibonacci(num-1) + fibonacci(num-2))
    return fibonacci(num-1) + fibonacci(num-2)
}

console.log(fibonacci(13))