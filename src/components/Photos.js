import React from "react";
import { gql, useQuery } from "@apollo/client";

/** PHOTOS gql query to retreive all photos */
export const GET_PHOTOS = gql`
query getPhotos($location: String!) {
  photos(location: $location) {
    results {
      id
      user {
        id
        username
        portfolio_url
        profile_image {
          small
        }
      }
      urls {
        full
      }
    }
  }
}
`;

/*
 * Photos is the components where I display an album of photos fetched with useQuery with the TRACKS query
 */
export default function Photos({ location }) {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { location },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      {data.photos.results.map((photo) => (
        <img key={photo.id} src={photo.urls.full} alt="" />
      ))}
    </div>
  );
}
