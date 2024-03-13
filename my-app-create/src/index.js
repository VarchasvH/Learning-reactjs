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
