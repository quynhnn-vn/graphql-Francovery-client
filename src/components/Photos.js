import React from "react";
import { gql, useQuery } from "@apollo/client";
import PhotoSlideshow from "./PhotoSlideshow";
//import BackgroundSlider from "react-background-slider";

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
          regular
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
  //const photosData = data.photos.results.map((photo) => photo.urls.regular);
  return (
    //<BackgroundSlider images={photosData} duration={8} transition={2} />
    <PhotoSlideshow data={data} location={location} />
  );
}
