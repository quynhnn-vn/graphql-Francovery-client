import React from "react";
import { gql, useQuery } from "@apollo/client";
import ArticlesGrid from "./ArticlesGrid";
import Loading from "./Loading";

/* Query to retreive articles related to a location */
export const GET_ARTICLES = gql`
  query getArticles($location: String!) {
    articles(location: $location) {
      articles {
        title
        description
        url
        urlToImage
        publishedAt
        source {
          name
        }
      }
    }
  }
`;

/*
  Articles data after fetched with useQuery and GET_ARTICLES query
  will be send to ArticlesGrid component for rendering
*/
export default function Articles({ location }) {
  const { loading, error, data } = useQuery(GET_ARTICLES, {
    variables: { location },
  });
  if (loading) return <Loading name="articles-container" />;
  if (error) return `Error! ${error.message}`;
  return <ArticlesGrid data={data.articles.articles} />;
}
