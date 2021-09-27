# React & GraphQL Apollo Server: Francovery

This project was created for foreigners who want to learn about France, especially about administrative divisions.
This website includes the following functions:

At homepage:
- Display map of France by administrative division levels: `régions`, `départments` and `communes`
- Select a location to view detailed information

At details page:
- Provide a collection of images searched by keyword which is the place name
- Display information about population, population density, average salary... of the location
- Provide google map and weather forecast chart of the location
- List recent articles related to that location

Check out the deployed version here: [https://francovery-qnn.netlify.app/](https://francovery-qnn.netlify.app/)

## API and dataset description

This project collects data from the following sources:
- [GADM maps and data](https://gadm.org/index.html) for TopoJSON France map
- [Unsplash API](https://unsplash.com/developers) for image data
- [Insee France](https://www.insee.fr/fr/recherche/recherche-statistiques) for statistical data
- [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started) for map data
- [OpenWeather API](https://openweathermap.org/api) for weather data
- [NewsAPI](https://newsapi.org/) for news data

## Available Scripts

To run this project locally:

1. First of all, you need to download the server repository:
`git clone https://github.com/quynhnn-vn/graphql-francovery-server.git`

2. In `graphql-francovery-server` directory, you can run:
`yarn install` to install required dependencies and
`yarn start` to start the GraphQL API server

3. Now you can download this directory:
`git clone https://github.com/quynhnn-vn/graphql-francovery-client.git`

4. In `graphql-francovery-client` directory, same as above, you run
`yarn install` and
`yarn start`

5. This will start the application and open up localhost:3000 in your web browser.


