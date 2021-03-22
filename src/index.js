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
/* class Rectangle {
  constructor(a, b) {
    this.length = a;
    this.width = b;

    this.perimeter = 2 * (a + b);
    this.area = a * b;
  }
}

var rec = new Rectangle(4, 5);

console.log(rec); */
/* function getCount(objects) {
  var ctr = 0;
  for (var i = 0; i < objects.length; i++) {
    if (objects[i].x === objects[i].y) {
      ctr++;
    }
  }
  return ctr;
}

console.log(getCount([1, 2, 3, 4, 5, 12, 4, 5, 6]));
 */
/* class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  perimeter() {
    return this.sides.reduce(function add(a, b) {
      return a + b;
    });
  }
}

let triangle = new Polygon([3, 4, 5]);

console.log(triangle.perimeter());
 */
/* class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

Rectangle.prototype.area = function () {
  return this.w * this.h;
};

class Square extends Rectangle {
  constructor(s) {
    super(s);
    this.h = s;
    this.w = s;
  }
}

let square = new Square(4);
let rect = new Rectangle(4, 5);

console.log(`AREA OF SQUARE IS ${square.area()}`);
console.log(`AREA OF RECTANGLE IS ${rect.area()}`);
 */
/* function sides(literals, ...expressions) {
  // ES6 allows destructuring of arrays into multiple variables
  const [a, p] = expressions;
  // Perform this operation only once and assign to variable
  const root = Math.sqrt(p * p - 16 * a);
  const s1 = (p + root) / 4;
  const s2 = (p - root) / 4;
  // s2 will always be smaller because of the (-/+) above
  return [s1, s2].sort();
}

console.log(sides([23, 4], [3, 5])) */

/* function modifyArray(nums) {
  var aws = function (n) {
    if (n % 2 === 0) return n * 2;
    else return n * 3;
  };
  var newArray = nums.map(aws);
  return newArray;
}

console.log(modifyArray([1, 2, 3, 4, 4])); */

/* var getMaxLessThanK = function (n, k) {
  let max_value = 0;
  for (var i = 1; i < n; i++) {
    for (var j = i + 1; j < n + 1; j++) {
      if (Number(i & j) < k) {
        // This line
        if (Number(i & j) > max_value) {
          // And this line
          max_value = i & j;
        }
      }
    }
  }
  return max_value;
};

console.log(getMaxLessThanK(34, 88)); */

/*  mm/dd/yyy */

/* function regexVar() {
  
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
  
  //  ^ => first item matches:
  // () => stores matching value captured within
  // [aeiou] => matches any of the characters in the brackets
  // . => matches any character:
  // + => for 1 or more occurrances (this ensures str length > 3)
  // \1 => matches to previously stored match.
  // \2 looks for matched item stored 2 instances ago
  // \3 looks for matched item stored 3 ago, etc

  //  $ ensures that matched item is at end of the sequence

  let re = /^([aeiou]).+\1$/;
  return re;
}

console.log(regexVar("OOPS"));
 */
