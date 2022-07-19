# Dashboard Pipeline UI

This project was made as an example of a dashboard that displays a pipeline's list of executed processes whose 
information comes from a mock API.

This repo was intended to used a clean architecture through the folder and the components logic. 

In this solution I didn't care much about the styles and layout. I mainly focused on the logic and data management.
Here I decided not to use any management state technology such as Redux or Mobx, beacuse I tried to maintain it as
simple as posible. 

It should be recommendable to use at least the Context API depending on the complexity of the other pages and also take in mind if they're going to reuse the same the data or not. I mean, once we could know the general vision of the project then we could decide if we're going to use any state manager or we're just using a good design pattern to build upt the whole UI. However, the one solution we've got here is a really good start for an small aplication.

I created a `serviceAPI` that can be scalable to fetch all data from the endpoints and also allows multiple requests in the same asynchronous block. This service is perfect to be used as a base service in all the requests that the app could need. The `serviceAPI` could be used and managed by any custom hook or Provider, so it can be easily integreted with any other technology or library to make it more efficient if the app's data grows up.

In this solution I created a custom hook `useQuery` to handle any request through the ServiceAp so the components won't need to worry about handling the request in a useEffect hook. This hook receives the `serviceAPI`'s query that are inside services/queries and returns the data ready to be used in the component. The hook will handle the loading states, fetching the data and return it to the component.

## How to make it run
> IMPORTANT: This project uses YARN. 

- clone the repo
- run `yarn add` or `yarn`
- run `yarn dev` to start the development server. it'll be running on the <http://localhost:3001>


## Folders Architecture

- adapters -> Here goes all the functions that help the components to mutate all data that comes from the backend or goes to it.
- components -> Here are all the global big components that the app uses.
- context -> All the available contexts for the app, just the declaration. (I created one for the Theming)
- DesignSystem -> This is a folder i love to have where are all the essential components like butons, inputs, text. also all the configuration for the theming.
- hooks -> all the custom hooks (what a surpise :)
- pages -> here comes the sun...thathat. Here comes all the views/pages/screens of the app.
- providers -> all the providers that uses the contextAPI.
- services -> this folder contains all the logic to request any data from any API.
- utils -> here goes the rest of the app. lol 
