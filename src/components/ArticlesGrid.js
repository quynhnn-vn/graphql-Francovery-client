import React from "react";
import "../styles/ArticlesGrid.scss";

export default function ArticlesGrid({ data }) {
  return (
    <div className="article-container">
    {data.articles.articles.map(article => (
        <a className="article-card" href={article.url} target="_blank" rel="noreferrer">
            <h4>{article.title}</h4>
            <p>Time: {article.publishedAt}</p>
            <p>{article.description}</p>
            <img src={article.urlToImage} alt=""/>
        </a>
    ))}
    </div>
  );
}
