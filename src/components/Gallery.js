import React from 'react'

export default function Gallery() {
    return (
        <div>
            
        </div>
    )
}

// import React from 'react'
// // import { gql, useQuery } from "@apollo/client";
// // import regionData from "../data/regionData.json";

// /** PHOTOS gql query to retreive photos of a location */
// export const GET_PHOTOS = gql`
//   query getPhotos($location: String!) {
//     photos(location: $location) {
//       results {
//         id
//         user {
//           id
//           username
//           portfolio_url
//           profile_image {
//             small
//           }
//         }
//         urls {
//           regular
//           full
//         }
//       }
//     }
//   }
// `;

// export default function Gallery() {
//   // let location;
//   // let galleryData = [];

//   // React.useEffect(() => {
//   //   regionData.map((region) => {
//   //     location = region.NOM;
//   //     const { loading, error, data } = useQuery(GET_PHOTOS, {
//   //       variables: { location }
//   //     });
//   //     if (loading) return "Loading...";
//   //     if (error) return `Error! ${error.message}`;
//   //     galleryData.push(data);
//   // })
//   // }, [location]);

//   // return (
//   //       <div className="gallery-container">
//   //           {galleryData.map(photo => (
//   //               JSON.stringify(photo)
//   //           ))}
//   //       </div>
//   //   )
//   return (
//     <div>Hello</div>
//   )
// }
