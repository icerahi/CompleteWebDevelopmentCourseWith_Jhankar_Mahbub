import logo from "./logo.svg";
import "./App.css";
import News from "./components/news/News";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=a4c85fe4728d43fcbfa4caac54969208"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div className="App">
      {news.length === 0 ? (
        <Spinner animation="border" />
      ) : (
        <Row xs={1} md={3} className="g-4">
          {news.map((nw, k) => (
            <News key={k} news={nw} />
          ))}
        </Row>
      )}
    </div>
  );
};

export default App;

// Plain bootstrap
/* function App() {
  const items = [
    {
      name: "first item",
      description: "lfadfapdoifpeiojfpaseiofj",
      img: "https://avatars.githubusercontent.com/u/32910469?v=4",
    },
    {
      name: "first item",
      description: "lfadfapdoifpeiojfpaseiofj",
      img: "https://avatars.githubusercontent.com/u/32910469?v=4",
    },
    {
      name: "first item",
      description: "lfadfapdoifpeiojfpaseiofj",
      img: "https://avatars.githubusercontent.com/u/32910469?v=4",
    },
    {
      name: "first item",
      description: "lfadfapdoifpeiojfpaseiofj",
      img: "https://avatars.githubusercontent.com/u/32910469?v=4",
    },
  ];
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {items.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
} */
