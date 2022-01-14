# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What are props in React?

Your answer: In React, props stands for properties. Props are used as variables to pass down information from a parent class to a child class via component calls (usually from the App.js file to a component). They are called inside of the component using the syntax this.props.variablename.

Researched answer: Props is an object which contains all of the props passed down to the child component. Props may not only be passed from App.js to a child component, but also between components themselves. Props are read only and can't be directly modified inside of the child component.

2. What is a DOM event?

Your answer: DOM events are the bridge between the virtual DOM and the real DOM. They are signals that the user has interacted with the website. They are triggered by event listeners, such as .onClick, .onChange, etc. Once triggered, the event listeners will execute code as specified by the developer.

Researched answer: DOM events are signals that something has occured, or is occuring, typically as triggered by the user. They can include mouse events, keyboard events, HTML frame/object events, HTML form events, user interface events, mutation events (pertaining to changes in the strucutre of the document), and progress events. They can also include touch events for touch-enabled devices.

3. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming (OOP) relies on using classes and objects to manipulate data for a desired outcome. This is in contast to functional programming, which relies on logic and functions. Functional programming is considered to be less intuitive than OOP, because objects are data structures which were created to mimic how people see real life objects. In this sense, classes are the idea of a thing, whereas objects are the direct implementation of said thing.

Researched answer: Object oriented programming is a computer programming model that organizes software design around data rather than functions and logic. There are four principles of OOP: Encapsulation, abstraction, inheritence, polymorphism. Encapsulation is the idea that data and methods are bundled into a single unit (ie a class). This allows you to control access to the internals of the class. Abstration the idea that you only show essential attributes and hide all unneccesary information in a class. This is done to reduce complexity in programming. Inheritence is a mechanism where you derive a class from another class, often times to form a hierarchy of classes with shared attributes and methods. This is done to reduce redundancy of code being used. Polymorphism is the idea that multiple child classes within a heirarchy can be accessed with one interface. Information can be passes into multiple classes, which is then dealt with by each class based on it's predefined properties.

4. What is the difference between a Float and an Integer in Ruby?

Your answer: In Ruby, a float is a number which has a decimal followed by any number of significant digits. An integer is a number without a decimal. Whenever floats are introduced into a mathematical expression, the result will also be a float.

Researched answer: In Ruby, integers are unable to contain floats unless they interact with another float. For example, if you were to divide 7/3, you would not get 2.3333 but instead get 2. Ruby will round integers to the nearest whole number. Floats will round to the lowest significant digit provided. Floats also take up more memory than integers, so it's best to use integers when appropriate.

5. Ruby has an implicit return. What does that mean?

Your answer: The implicit return in Ruby applies to custom methods. In Javascript, functions must be terminated using explicit returns at the end of the function. However, these returns are not needed in Ruby. This implies that the return is built into the custom method already.

Researched answer: The return in Ruby is implicit, and makes the use of return unnecessary. In fact, using return in Ruby can result in errors if used inside of Procs (an encapsulation of a block of code).

## Looking Ahead: Terms for Next Week

1. Instance Variable: Pertaining to object-oriented programming, an instance variable is a variable defined in a class from which instanced objects have a separate, independent copy. They can be declared at the class level either before or after use.

2. PostgreSQL: PostgreSQL is an open source object-relational database system which extends the SQL language. It can run on all major operating systems and has a number of popular addons, including PostGIS.

3. Ruby on Rails: Ruby on Rails is a server-side web application framwork written in Ruby. It is a full-stack framework which provides default structures for a database, a web service, and web pages. It uses a Model-View-Controller (MVG) layout, with each layer having a specific responsibility. The Model layer represents the domain model and encapsulates the business logic of the application. The View layer provides appropriate representations of your application's resources. Finally, the Controller layer is responsible for handling HTTP requests and providing a suitable response.

4. ORM: Object-relational mapping, or ORM, is a technique for converting data between seemingly incompatible type systems, in order to create a virtual object database.

5. Active Record: An active record is equivalent to the Model layer described in my RoR response. It is responsible for representing business data and logic for a website. It facilitates the creation and use of business objects whose data requires persistent storage to a database.
