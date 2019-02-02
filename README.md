# Boilerplate React Apollo Next

## How to use

- Firstly, clone the repo.
- Then run `npm install`.
- Configure your GraphQL endpointin the config.js file.
- After everything is finished, run `npm run dev`.

## Dependencies

- **Jest and Enzyme** for testing purposes.
- **React Transition Groups** for animating React components.
- **Styled Components** to create styled React components.
- **PropTypes** to check types in React.
- **nprogress** a library that allows you to create a UI that shows the loading state of the page.

## Routing

Because of Next.js, You don't need to add routes for your pages. Every file in the pages uses the route as the are named:

```
pages/index.js => /
pages/about.js => /about
```

## To-do

- Add possibility to configure routing manually.
- Install `dotenv` and include environment variables.
- Configure deployment.
- Including basic tests with `Jest` and `Enzyme`.
