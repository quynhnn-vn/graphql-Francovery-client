import React from "react";
import { gql, useQuery } from "@apollo/client";
import PhotoSlideshow from "./PhotoSlideshow";
import Loading from "./Loading";

/* Query to retreive photos related to a location */
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
          regular
        }
      }
    }
  }
`;

/*
  Photos data after fetched with useQuery and GET_PHOTOS query
  will be send to PhotoSlideshow component for rendering
*/
export default function Photos({ location }) {
  const { loading , error, data } = useQuery(GET_PHOTOS, {
    variables: { location },
  });
  if (loading) return <Loading name="slideshow-container"/>;
  if (error) return `Error! ${error.message}`;
  return <PhotoSlideshow data={data.photos.results} location={location} />;
}
