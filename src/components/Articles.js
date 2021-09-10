import React from "react";
import { gql, useQuery } from "@apollo/client";
import ArticlesGrid from "./ArticlesGrid";

/** PHOTOS gql query to retreive all photos */
export const GET_ARTICLES = gql`
query getArticles($location: String!) {
    articles(location: $location) {
      articles {
        title
        description
        url
        urlToImage
        publishedAt
        content
        source {
          name
        }
      }
    }
  }
`;

/*
 * Photos is the components where I display an album of photos fetched with useQuery with the TRACKS query
 */
export default function Articles({ location }) {
  const { loading, error, data } = useQuery(GET_ARTICLES, {
    variables: { location },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      {/* <ArticlesGrid data={data}/> */}
    </div>
  );
}
