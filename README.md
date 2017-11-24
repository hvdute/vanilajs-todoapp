# JavaScript Essential Training
## _Notes, snippets and demo by dunghv@dgroup.co_

### **1. JavaScript - An Introduction**  
JavaScript is a programming language that allows you to implement complex things on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, or interactive maps, or animated 2D/3D graphics, or scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies among two of which (HTML and CSS).

### **2. The Basics**  
1. Add inline Javascript to HTML  
We can write Javascript inside the body of `<script></script>` tag.  
    ```html
    <script>
      // JavaScript can be written here...
      console.log('Hello World');
    </script>
    ```

2. Linking external JavaScript file to HTML document:  
By using the `<script>` tag but specifying `src=<link_to_js>` attrib, we can link external JS file to document. The order of executing depends on the order of `<script>` tag in HTML.  
    ```html
    <script src="/main.js">
    </script>
    ```

3. Some basics of writing JavaScript:  
- JS is case-sensitive
- JS don't care about whitespace
- JS don't care about semicolon
- Using modern functionality of JS requires some browser supports.

### **3. Working with data**  

1. Variables  
In JavaScript, a variable can hold any type of data and there is no need specifying variable's type. We just declare it and assign variable to it.  
**How to declare variable in JavaScript:**  
    - `var <name_of_variable>;` - by default, if we don' specify initial value for that variable, it's `undefined`
    - `let <name_of_variable>;` - block-scoped declaration, available in ES6
    - `const <name_of_variable>;` - constant, re-assign is not allowed, available in ES6

2. Data types  
- `Numeric` - JavaScript has only one type of numbers. Numbers can be written with, or without decimals
- `String` - Store strings of letters, characters. Strings are written with quotes. You can use single or double quotes:
- `Boolean` - true false
- `Array`
- `Object` - the most powerful data type of Javascript
- `undefined`
- `null`

3. Arithmetic operators and Math  
- Assignment operators `=`
- Arithmetic operators `+ - * / `  
  JS follow algebra rules
- Shorthand math: `+= -= *= /=`
    - `a += b` <=> `a = a + b`
    - and so on....
- Unary operators:
    - `a++` return current value of a then increase value of a by 1
    - `++a` return a+1 and increase value of a by one
    - `a--` and `--a` is the same...

4. Working with strings and numbers  
Working with strings and numbers in Javascript is quite easily because there are many builtin methods for processing. But there's still some tricky point we need to know.
    ```javascript
    var a = 5;
    var b = 4;
    var tmp = a + b; // return 9 is Number
    tmp = a - b; //return 1 is Number
    b = "4";
    tmp = a + b; // return 54 is String because there is a string in expression
    tmp = a - b; // return 1, still work because JS automatically convert datatype when possible, but
    b = "4i";
    tmp = a - b; // throw TypeError....
    ```

5. Conditional statements and logic  
Some conditional, logic operators:
  - `==` - linear equal
  - `===` - strictly equal, must equal value and the same type
  - `< >` - less than, greater than
  - `<= >=` - less than or equal, greater than or equal
    ```javascript
    if (condition) {
      // if true then do something
    } else {
      // if false, do something else
    }
    ```

6. Advanced conditions and logic  
- `a && b` - return true if both are true, if first operants is false then skip checking
- `a || b` - return true if one of theme is true, if the first operant is true then skip checking
- `condition ? a : b` - return a if condition is true, else return b

7. Arrays  
Javascripts array is mixed-type and zero-index. Array is `Object` type.
    ```javascript
    var colors = [ "red", "green", 445533]
    console.log(colors[0]); // return "red"
    console.log(colors[2]); // return 445533
    colors[2] = "yellow";
    console.log(colors[2]); // return "yellow"
    ```

8. Properties and methods of Array:  
Some useful properties and methods when working with array  
    ```javascript
    var colors = [ "red", "green", 445533];
    colors.length; // return length of array is 3
    colors.push("black"); // add items to end of arrays
    colors.pop(); // remove and return the last item of array
    colors.shift(); // remove and return the last item of array
    colors.unshift("pink"); // add items to beginning of array
    //
    ```  
    And tons of useful methods we can read for more details on this link:  
      http://devdocs.io/javascript-array/

### **4. Function and Objects**  

1. Functions in Javascript  
    ```javascript
    // this is a normal function define with parameters
    function ageCalculator(age) {
      // implements here
      console.log(`Your age is ${age}. Well done!`);
      return age;
    }

    // call it
    ageCalculator(17); // return 17 :)))

    // anonymous function, aka function without name
    // this function can be store in a variable or pass as function parameter
    var sayHi = function() {
      console.log('Hello man!');
    }
    sayHi(); // print out "Hello man!"

    // immediately invoked function, execute right immediately
    (function(name) {
      console.log("Hi " + name);
    })("Dung Hoang"); // print out "Hi Dung Hoang" on console.
    ```

2. Variable scopes:  
Some important concepts:  
    - In Javascript, everything declare in root context is `global` available. That means you can access it everywhere in your code.
    - JavaScript is `lexical scope`, which means anything declare in parent level can be accessed in child level.
    - **Hoisting**  
    Javascript automatically bring function and variables declarations to the top of that scope. For example:
        ```javascript
        console.log(name); // worked
        sayHi(name); // worked
        var name = "Dung";
        function sayHi(name) {
          console.log(name);
        }
        // this is how JS see your code
        var name = "Dung";
        function(name) {
          console.log(name);
        }
        console.log(name);
        sayHi(name);
        ```
    - **Local scope**  
    Variable declare inside function body is `local scope`. That means it's only available inside that function. And if there is a global with the same name existed. It will be overlaped by the local variable.

    - ES2015 (ES6) `let` and `const`  
    Before ES2015, block scope is not available in Javascript. Now with the presence of `let` and `const`, we can define block scope in Javascript just like this:  
        ```javascript
        let globalVar = "global";
        if (true) {
          var nameVar = "nameVar"; // available outside this block
          let nameLet = "nameLet"; // not available outside this block
          const NAME = "NAME CONST"; // not available outside this block and can not be re-assigned
          NAME = letVar; // error, cannot re-assign const
        }
        // test availability of those variables
        console.log(nameVar); // return "nameVar"
        console.log(letVar); // error, undefined
        console.log(nameVar); // error undefined
        ```

3. Object in Javascript  
JavaScript is technically a Objeect-Oriented Languege. But it quite freely and not strictly as another OOP language like Java, C#,... But that in-strictly structure make JavaScript Object very flexible to work with.  
There are some important points we need to know when working with Object:  
    - Define an object:
        ```javascript
        let person = {
          name: "Dung Hoang",
          age: 15,
          email: 'dunghv@dgroup.co',
          sayHi: function() {
            console.log(this.name);
          }
        };
      ```
    - Object is key-value structure.
    - Key can be a string or a symbol. To access special key. We use bracket notation like this:  
        ```javascript
        let mySecretKey = Symbol(); 
        let person = {
          name: "Dung Hoang",
          "Hello World": "Hello World here!",
        };
        person[mySecretKey] = 'my secret here, only mySecretKey can get into this';
        // use bracket notation to access those special key
        console.log(person['Hello World']); // return "Hello World here!"
        console.log(person[mySecretKey]); // return "my ...."
        ```

4. Object constructor:  
We can imagine that we are creating `class` for reusing object later.  
    ```javascript
    function Person(name, age, address) {
      this.name = name;
      var tmp = "Tmp"; // this is consider Object private variable and can only be exposed by using a Getter method, as sayHi() below
      this.age = age;
      this.address = address;
      // defining Object methods
      this.sayHi = function() {
        console.log("Hello, I'm " + this.name);
        // return a tmp private variable
        return tmp;
      };
    }
    let dungHoang = new Person("Dung", 16, "HCM");
    console.log(dungHoang.tmp);
    console.log(dungHoang.name); // return "Dung"
    console.log(dungHoang.age); // return 16
    console.log(dungHoang.address); // return .........
    ```

5. Closures  
Closure is the local variable of a function that still be referenced by another nested function. So that, when the parent function has been terminated, those variables are still be kept in memory. For example:
    ```javascript
    function sayHiFactory() {
      let count=0; // count is still used by sayHi() function below. So when sayHiFactory() has finished executing, count still lives in memory.
      // by this way, the getCount() method of the returned object can still increase and get count values...
      return {
        sayHi(name) {
          console.log(`Hello there! I'm ${name}.`);
          count++;
        },
        getCount() {
          console.log(`I've been called ${count} times!`);
          return count;
        }
      };
    }
    let person = sayHiFactory();
    person.getCount(); // return "I've been called 0 times."
    person.sayHi('Dung');
    person.getCount(); // return "I've been called 1 times."
    person.sayHi('Dung');
    person.getCount(); // return "I've been called 3 times."
    ```

