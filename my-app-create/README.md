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
