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

