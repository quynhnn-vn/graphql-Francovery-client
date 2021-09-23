# React & GraphQL Apollo Server: Francovery

This project was created for foreigners who want to learn about France, especially about administrative divions.
This website includes the following functions:

At homepage:
- Display map of France by administrative division levels: `régions`, `départments` and `communes`
- Select a location to view detailed information

At detail page:
- Provide a collection of images searched by keyword which is the place name
- Display information about population, population density, average salary... of the location
- Provide google map and weather forecast chart of the location
- List recent articles related to that location

## Available Scripts

To run this project locally:

- First of all, you need to download the server repository:
`git clone https://github.com/quynhnn-vn/graphql-francovery-server.git`

- In `graphql-francovery-server` directory, you can run:
`yarn install` to install required dependencies and
`yarn start` to start the GraphQL API server

- Now you can download this directory:
`git clone https://github.com/quynhnn-vn/graphql-francovery-client.git`

- In `graphql-francovery-client` directory, same as above, you run
`yarn install` and
`yarn start`

- This will start the application and open up localhost:3000 in your web browser.


