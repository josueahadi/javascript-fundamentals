for (var x = 1; x<=100; x++) {
    (x%3==0 && x%5==0) ? console.log('FizzBuzz') : 
    (x%3==0) ? console.log('Fizz') : 
    (x%5==0) ? console.log('Buzz') : 
    console.log(x);
}