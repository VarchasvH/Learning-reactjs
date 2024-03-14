import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    img: "https://m.media-amazon.com/images/I/81Ls+SBCLiL._SY466_.jpg",
    link: "https://amzn.eu/d/hqGOBiQ",
    id: 1,
  },
  {
    title: "THE 48 LAWS OF POWER",
    author: "Robert Greene",
    img: "https://m.media-amazon.com/images/I/61J3Uu4jOLL._SY466_.jpg",
    link: "https://amzn.eu/d/5rWYai4",
    id: 2,
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    img: "https://m.media-amazon.com/images/I/61-hMfd7NGL._SY466_.jpg",
    link: "https://amzn.eu/d/5rWYai4",
    id: 3,
  },
];

const BookList = () => {
  return (
    <section className="bookList">
      {books.map((book) => {
        const { id } = book;
        return <Book {...book} key={id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  const displayTitle = () => console.log(title);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <button onClick={displayTitle}>Display Title</button>
      <h4>{author}</h4>
    </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
