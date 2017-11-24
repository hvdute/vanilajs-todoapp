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

