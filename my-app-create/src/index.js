import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  title: "Atomic Habits",
  author: "James Clear",
  img: "https://m.media-amazon.com/images/I/81Ls+SBCLiL._SY466_.jpg",
  link: "https://amzn.eu/d/hqGOBiQ",
};
const secondBook = {
  title: "THE 48 LAWS OF POWER",
  author: "Robert Greene",
  img: "https://m.media-amazon.com/images/I/61J3Uu4jOLL._SY466_.jpg",
  link: "https://amzn.eu/d/5rWYai4",
};
const thirdBook = {
  title: "The Psychology of Money",
  author: "Morgan Housel",
  img: "https://m.media-amazon.com/images/I/61-hMfd7NGL._SY466_.jpg",
  link: "https://amzn.eu/d/5rWYai4",
};

const BookList = () => {
  return (
    <section className="bookList">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
      <Book
        title={thirdBook.title}
        author={thirdBook.author}
        img={thirdBook.img}
      />
    </section>
  );
};
const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h4>{title.toUpperCase()}</h4>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
