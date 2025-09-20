/* eslint-disable react/display-name */
import React from "react";

const DB = {
  books: [ { title: "Adarsh books", author: "me" }, { title: "Ayush books", author: "brother" }, { title: "Ankita books", author: "sister" }, ],
  songs: [ { title: "Adarsh song", album: "me" }, { title: "Ayush song", album: "brother" }, { title: "Ankita song", album: "sister" }, ],
};

// This is a HOC, Always Start Name "with..." in HOC
const withHOC = (Component, classes) => (props) => {
  return (
    <div className={classes}>
      <Component {...props}></Component>
    </div>
  );
};

// This is App Components Return Default
const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Books books={DB.books} />
      <Songs songs={DB.songs} />
      <BookComponent books={DB.books} />
      <SongComponent songs={DB.songs} />
    </div>
  );
};
export default App;

const Songs = ({ songs }) => {
  return (
    <div>
      <h3>Songs</h3>
      <ul> {songs.map((e) => ( <li key={e.title}> songs: {e.title} / Album: {e.album} </li> ))} </ul>
    </div>
  );
};
const Books = ({ books }) => {
  return (
    <div>
      <h3>Books</h3>
      <ul> {books.map((e) => ( <li key={e.title}> Books: {e.title} / Author: {e.author} </li> ))} </ul>
    </div>
  );
};

// This is the wrapper of HOC to gets the props
const BookComponent = withHOC(Books, "dark");
const SongComponent = withHOC(Songs, "dark");
