import React from "react";
import "../styles/ArticlesGrid.scss";
import moment from "moment";

export default function ArticlesGrid({ data }) {
  const articlesData = data.articles.articles;
  let smallData = [];
  if (articlesData.length > 8) {
    smallData = articlesData.slice(0, 8);
  } else {
    smallData = articlesData;
  }
  return (
    <div className="article-container">
    {smallData.map(article => (
        <a className="card" href={article.url} target="_blank" rel="noreferrer">
          <div className="card-header">
            <img src={article.urlToImage} alt=""/>
          </div>
          <div className="card-body">
            <h4>{article.title}</h4>
            <p>{article.description}</p>
          </div>
          <div className="card-source">
            <h5>{article.source.name}</h5>
            <small>{moment(article.publishedAt).fromNow()}</small>
          </div>
        </a>
    ))}
    </div>
  );
}
