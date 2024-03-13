# Some notes about Components in React.JS

    - Component = Function

    - Components in React are JS functions.

    - Component/Function must start with a capital letter.

    - To use the function, it must be exported.

    - Which essentially makes the component and we can grab it anywhere and render it.

    - ES7 snippets: rface(arrow and export) and rfce(normal function and export).

    - In the long run, React.createElement is worse and more confusing than writing html in return.

    - About Root - Everything is done inside the root div.

# Render a component

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FUNCTION_NAME />);
```

# Ways to create a React Component

```javascript
// JSX WAY
function Greeting() {
  return (
    <div>
      <h2>hello world</h2>
    </div>
  );
}

// REACT WAY
const Greeting = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "hello world")
  );
};
```

# JSX RULES

1. We must always return a single element[One parent element] INSIDE RETURN.

```javascript
function Greetings() {
  return (
    <div>
      <div>
        <h3>
          <ul>
            <li>
              <a href="#">hello-world</a>
            </li>
          </ul>
        </h3>
      </div>
    </div>
  );
}
```

- Not a rule but try to use specific html semantics such as navbar, sections instead of just using div.

- You could also use fragments.

  ```javascript
  return <React.Fragment>...rest of the return</React.Fragment>;

  // shorthand
  return <>...rest of the return</>;
  ```

2. JSX uses camelCase property naming convention.

3. className instead of class.

4. Close every element / Self Closing </>.

5. Formatting - Write the opening tag or () in the same line as return.

   ```js
   function(){
       return <></>;
       // Or
       return ();
   };
   ```

6. You can also nest components.

   ```js
   function Greeting() {
     return (
       <div>
         <Person /> // nested
         <Message /> // nested
       </div>
     );
   }

   const Person = () => <h2>john doe</h2>;
   const Message = () => {
     return <p>this is my message</p>;
   };
   ```

# Local Images

There are three types of images that we can use:

1. **External images** (hosted on different server) - just need an url.
2. **Local images (public folder)** - less performant.
3. **Local images (src folder)** - better solution for assets, since under the hood they get optimized.

# CSS

- You can add inline CSS, CSS files or a third way is to define css inside a component itself.
- Use what you prefer.

```js
const Author = () => {
  const inlineHeadingStyles = {
    color: "#617d98",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
};
```

# Current Code

```js
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/81Ls+SBCLiL._SY466_.jpg"
    alt="Atomic Habits: the life-changing million-copy"
  />
);
const Title = () => <h2>Atomic Habits</h2>;
const Author = () => {
  const inlineHeadingStyles = {
    color: "#A5C9FF",
    fontSize: "0.75rem",
    marginTop: "0.5rem",
  };
  return <h4 style={inlineHeadingStyles}>James Clear </h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
```

# JSX - Javascript

Refactoring all the code to a single component.
