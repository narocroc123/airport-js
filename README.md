Airport Challenge in JavaScript
===============================

User Stories
------------

```
As an air traffic controller
So I can get passengers to a destination
I want to instruct a plane to land at an airport

As an air traffic controller
So I can get passengers on the way to their destination
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

As an air traffic controller
To ensure safety
I want to prevent landing when the airport is full

As the system designer
So that the software can be used for many different airports
I would like a default airport capacity that can be overridden as appropriate

As an air traffic controller
To ensure safety
I want to prevent takeoff when weather is stormy

As an air traffic controller
To ensure safety
I want to prevent landing when weather is stormy
```

# Week 8 - Learn A New Language

### Outcomes

- Describe a process for learning a new language
- Follow an effective process for learning a new language
- Test drive a simple front-end web app with Javascript

### Learn A New Language By Translation

**Learning by Translation** - taking things that are known in one language, and learning their equivalent in another. This technique is good for picking up the syntax and basic manoeuvres of a language. However, it won’t be so effective for learning the conventions of the language — sometimes called the idioms, roughly meaning 'how we do things here'.

[Exercises - Learning A New Language By Translation](https://www.notion.so/Exercises-Learning-A-New-Language-By-Translation-bfba4aa366d84be1b7d660202874e267)

### Following The Flow and Getting Visibility in JavaScript

**Following the flow** - Understanding which parts of your code are running and in which order. Very similar to tightening the loop, but with a different goal. Instead of trying to narrow in on one buggy line of code, you're just trying to understand what happens when a piece of code runs.

**Getting Vis**i**bility** - Looking at the data contained in the variables in the code you're trying to understand.

**Ways to follow the flow**

- **console.logging recognisable strings:** A great way of following the flow is to console.log() little strings that you recognise. You can see which ones are printed in which order to figure out what code is running and in which order.

    Airport.prototype.land = function(plane) {
      if (plane.isLanded()) {
        console.log("hello1");
      } else if (this.weather.isStormy()) {
        console.log("hello2");
      } else {
        console.log("hello3");
      }
    }

- **Using a step debugger** - A debugger is a program that runs your program and lets you step through your program line by line. Some people really love using a debugger. Others don't. Give one a try and see how you feel.

    function sayHi() {
      debugger;
      console.log("hi!");
    };
    
    sayHi();

**Ways to get visibility (`console.log()`)**

- **this** - Really handy to know what value this has in a piece of code.

    console.log(this);

- **Variables** - Does this variable contain what I expect?

    console.log(airport);

- **Functions** - Am I calling the right function?

    console.log(airport.land);

- **Functions return values** - Is this function returning what I expect?

    console.log(airport.land());

- **Function parameters** - Does this parameter contain what I expect? What does this parameter even contain?

    Airport.prototype.land = function(plane) {
      console.log(plane);
    }

- **Using a step debugger** - When you run a debugger, you can hover over variables to see their values.

# Exercises - Learning A New Language By Translation

[Learning a new language by translation - HackMD](https://hackmd.io/kMNgXiPHQf2Q_P9A-tnS9A)

### Exercise in Ruby then JavaScript

- Classes (`class MyClass`)
    - Initialising a class with a class expression (`const y = class {}`)
- Methods (`def method`)
    - Initialising a function with a function expression (`const x = function() {}`)
    - Arrow functions (`hello = () => "Hello World!";`)
- Hashes (`{ key ⇒ value }`)
    - Objects(`var car = {type:"Fiat", model:"500", color:"white"};`)
- Arrays (`[]`)
    - In JS (`var cars = ["Saab", "Volvo", "BMW"];`)
- Variables (`a = 5`)
    - Let (`let a = 5`) or Const (`const a = 5`)
- While loop (`while conditional [do]`)
    - While loop (`while (i < 10) { text += "The number is " + i; i++;}`)
- For loop (`for variable_name[, variable...] in expression [do]`)
    - For loop (`for (i = 0; i < 5; i++) {}`)
- Do..while loop(`loop do # code to be executed break if Boolean_Expression`)
    - Do while (`do { text += "The number is " + i; i++;}while (i < 10);`)
- Until loop (`until conditional [do]`)
    - In JS variation of while/do while loop
- Initialize (`def initialize()`)
    - Constructor (`constructor()`)
- Instance variables and attribute reader/accessor/writer (`@instance = 4`) and (`attr_reader`)
    - Created in the constructor and accessed using this (`this.variable = variable`)
- Map (`.map`)
    - In JS (`.map`)
- Push (`.push`)
    - In JS (`.push`)
- To string (`to_s`)
    - In JS (`toString()`)
- To integer (`to_i`)
    - In JS (`parseInt()`)
- To array (`to_a`)
    - In JS (`var cars = new Array("Saab", "Volvo", "BMW");`)
- Print (`print = hello`)
    - Print messages in browser (`console.log(hello)`)
- Constant (`CONSTANT`)
    - Const notation (`const MY_CONSTANT = "some-value";`)
- Puts (`puts = 'hello'`)
    - Console log for debugging (`console.log()`)