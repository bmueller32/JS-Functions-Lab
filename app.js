(completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));


 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.



const maxOfThree = function( a, b, c ) {
    if(a >= b && a >= c) {
      return a;
 } else if (b >= a && b>= c ) {
      return b;
 } else( c>= a && c>=b )
     return c;


    
    console.log(maxOfThree(1, 2, 3));


}


//toLowerCase //indexOf
3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(x) {
x = x.toLowerCase();
return ('aeiouy'.indexOf(x) > -1);
}


console.log(isCharAVowel('a'));


// forEach method
4. Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

const sumArray = function(arr) {
    let sum = 0;
arr.forEach(function(n) {
    sum += n;
});
return sum;

};

// for loop
 5.Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

function multiplyArray(arr) { 
    let product = 1;
for (let i = 0; i < arr.length; i++) {
product *= arr[i]
}
return product;
}

console.log(multiplyArray([2, 3, 4]));

 //function expression 
 6.Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

 const numArgs = function(... args) {
   return args.length;


 };


console.log(numArgs('test', true, 5));


 //arrays reverse method
 7.Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

function reverseString(r) {
 let arr = s.split('')
 return arr.reverse().join('')
}

console.log(reverseString('rockstar'));




 //function expression//forEach
 8.Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

 const longestStringInArray = function(arr) {
  let longest = 0;
  arr.forEach(function(x) {
    if (s.length > longest) longest = s.length;
  });
  return longest;


 };






 
 9.Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

 function StringsLongerThan