/* function performOperation(secondInteger, secondDecimal, secondString) {
  // Declare a variable named 'firstInteger' and initialize with integer value 4.
  const firstInteger = 4;

  // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
  const firstDecimal = 4.0;

  // Declare a variable named 'firstString' and initialize with the string "HackerRank".
  const firstString = "HackerRank ";

  // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
  const first = +firstInteger + +secondInteger;
  console.log(first);

  // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
  const sec = +firstDecimal + +secondDecimal;
  console.log(sec);

  // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
  const third = firstString + secondString;
  console.log(third);
}

performOperation("12", "4.32", "is the shit");


 */

/* function greeting(parameterVariable) {
  // This line prints 'Hello, World!' to the console:
  console.log("Hello, World!");
  // Write a line of code that prints parameterVariable to stdout using console.log:
  console.log(parameterVariable);
}
console.log(greeting("Is cool"));
 */

/* function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));
 */

/* function area(r) {
  const PI = Math.PI;

  // Print the area of the circle:
  console.log("Area is " + PI * r * r);
  // Print the perimeter of the circle:
  console.log("Perimeter is " + PI * 2 * r);
}
console.log(area(5)); */

/* function getGrade(score) {
  // Write your code here
  if (score <= 5) {
    return "F";
  } else if (score <= 10) {
    return "E";
  } else if (score <= 15) {
    return "D";
  } else if (score <= 20) {
    return "C";
  } else if (score <= 25) {
    return "B";
  } else return "A";
}
console.log(getGrade(65)); */

/* function vowelsAndConsonants(s) {
  const vovwels = "aeiou";

  var cons = "";

  for (let i = 0; i < s.length; i++) {
    if (vovwels.includes(s[i])) {
      console.log(s[i]);
    } else {
      cons += s[i] + "\n";
    }
  }

  console.log(cons);
}

console.log(vowelsAndConsonants("javascriptloop"));
 */

/* function getLetter(s) {
  let letter;
  // Write your code here
  switch (true) {
    case "aeiou".includes(s[0]):
      letter = "A";
      break;
    case "bcdfg".includes(s[0]):
      letter = "B";
      break;
    case "hjklm".includes(s[0]):
      letter = "C";
      break;
    case "npqrstvwxyz".includes(s[0]):
      letter = "D";
      break;
    default:
      letter = "N/A";
      break;
  }
  return letter;
}
console.log(getLetter("bi"));
 */

/* function getSecondLargest(nums) {
  // Complete the function let first = nums[0]; let second = -1;
  let first = nums[0];
  let second = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
    }

    if (nums[i] > second && nums[i] < first) {
      second = nums[i];
    }
  }

  return second;
}

console.log(getSecondLargest([1,2,3,4,5])); */

/* function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log(s);
  }
}
console.log(reverseString("Yikes"));
//reverse string
 */

/* function isPositive(a) {
  if (a > 0) {
    return "YES";
  } else {
    throw a === 0 ? new Error("Zero Error") : new Error("Negative Error");
  }
}

console.log(isPositive(3)); */

class Rectangle {
  constructor(a, b) {
    this.length = a;
    this.width = b;

    this.perimeter = 2 * (a + b);
    this.area = a * b;
  }
}

var rec = new Rectangle(4, 5);

console.log(rec);
