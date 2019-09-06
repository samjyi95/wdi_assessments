# Week 7 Assessment - NAME: ___________  `__/12`

## JavaScript - ES6

#### Consider the following code

```javascript
const myFn = (a, b) => a * b

console.log(myFn(2, 3))
```

<br><br>

1. What prints out from the console.log statement? (1 point)

* a) Undefined
* b) Null
* c) Empty String
* d) 6
* e) None; it throws an error 

<br><br>

2. There is no return statement in the function. That is...? (1 point)

* a) Fine. It will figure out to return `a * b`
* b) Not fine. It will throw an error
* c) Fine. It returns the `this` object by default
* d) Not fine. There's no error but it just returns `undefined`
* e) None of the above

<br>

#### Other ES6 Questions

3. Which of the following is a feature of arrow functions? (1 point)

* a) Difficult to read code
* b) Integrated objective properties
* c) The `this` object is scoped to the parent
* d) The `this` object is `undefined`
* e) None of the above

<br><br>

4. Async and Await in ES6+ offer...? (1 point)

* a) A way to wait for an asynchronous call to finish without a bunch of callbacks
* b) A way of performing a loop operation in the background
* c) A way to bind data to the `this` object
* d) A way of handling exceptions gracefully in your code
* e) None of the above

<br><br>

5. The difference between `var` and `let` is what? (1 point)

* a) var means `variable` and let means `lettuce code`
* b) let is more specifically scoped than var
* c) var is more specifically scoped than let
* d) let eliminates the need for callback functions
* e) Only var allows you to use jQuery

<br>

#### Consider the following code

```javascript
for(var i = 0; i < 5; i++){
    console.log('hello from i', i);
}

for(let j = 0; j < 5; j++){
    console.log('hello from j', j);
}

console.log(i);
console.log(j);
```

<br>

6. At the end of running this code, the value of `i` is what? (1 point)

* a) 0
* b) 4
* c) 5
* d) undefined
* e) None of the above

<br><br>

7. At the end of running this code, the value of `j` is what? (1 point)

* a) 0
* b) 4
* c) 5
* d) Not defined
* e) None of the above

<br><br>

8. Running this code causes an error/exception. True or false? (1 point)

* a) True
* b) False
* c) All of the above
* d) None of the above

<br><br>

9. The `const` keyword means constant. What does that mean? (1 point)

* a) It is the same as var, just syntactic sugar
* b) It is the same as let, just syntactic sugar
* c) You can't change it, but if it's an object you can change its properties
* d) You can't change it, not even a little
* e) None of the above

<br><br>

10. What is the new operator ... (the 3 dots)? (1 point)

* a) Spread operator
* b) Axios operator
* c) Mutator operator
* d) It's not an operator, it's a shortcut for RESTful routing
* e) None of the above

<br>

#### Consider the following ES6 Code

```javascript
var foo = ['one', 'two', 'three'];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```

<br><br>

11. This is an example of...? (1 point)

* a) Array/Object Destructuring
* b) Generics
* c) Mutator operator
* d) A constructor function
* e) None of the above - this code won't actually run!

<br>

## Okay, Last Question!

12. ES6 stands for...? (1 point)

* a) ElectricScript 6
* b) ECMAScript 6
* c) EvaluatorScript 6
* d) YMCAScript 6
* e) ExpertScript 6
