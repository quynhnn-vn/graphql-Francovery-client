import React from "react";
import "../styles/ArticlesGrid.scss";
import moment from "moment";

/*
  ArticlesGrid component takes articles data to render a grid of articles,
  each card in the grid which is a link to full articles,
  has a thumbnail, title, description, source and published time
*/
export default function ArticlesGrid({ data }) {
  return (
    <div className="acticles-list-container">
      <h2>ACTUALITÉS LIÉES</h2>
      <div className="articles-container">
        {data.slice(0, 12).map((article, index) => (
          <a
            key={index}
            className="card"
            href={article.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-header">
              <img src={article.urlToImage} alt="" />
            </div>
            <div className="card-body">
              <h4>{article.title}</h4>
              <p>{article.description}</p>
            </div>
            <div className="card-source">
              <h5>{article.source.name}</h5>
              <p>{moment(article.publishedAt).fromNow()}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
