# NYT Most Popular Stories

## Overview

NYT Most Popular Stories is the place to get your top trending news.

View application [here]()

### Endpoints

This is a React application built using the [New York Times API](https://api.nytimes.com/svc/mostpopular/v2/viewed/{period}.json). The Most Popular Stories API Returns an array of the most emailed articles on NYTimes.com for specified period of time (1 day, 7 days, or 30 days).

Endpoints include these section values: 1,7,30

These are examples of the API's endpoints:

```
https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=sample-key
https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=sample-key
https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=sample-key

```

### Latest Article Endpoint

The `/1.json` endpoint gets the articles Most Popular Latest article within 24 hours for the New York Times website.

### API Key

An API key is required to utilize the API. Here's the [instructions](https://developer.nytimes.com/get-started) to get started using the API. Once you create a developer account on New York Times, you'll have to register your application to access the API key.


### Project Management Tools

- Test Project system via [GH Projects](https://github.com/insominiac/nyt-test)

- Component Architecture
  ![Component]()

# Used Methodologies

- React Router to build a multipage application
- REST APIs
- Asynchronous JavaScript(ES6)
- Acceptance testing & End-to-End (E2E) testing via Cypress

# Deployment

Skip installation by using this deployment link to view the application: [NYT]()

- The application was deployed using [Vercel](https://www.vercel.com/).

# Installation | Getting Started

To get a local copy up and running follow these simple steps.

## Clone the Repository

1. In your terminal, clone the repository to your local machine
   ```sh
   git clone ghttps://github.com/insominiac/nyt-test.git
   ```
2. `cd` into the root directory
   ```sh
   cd nyt-test
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the server to view the application in the browser
   ```sh
   npm start
   ```
   - Runs the app in the development mode.
   - Open http://localhost:3000 to view it in the browser.
   - The page will reload if you make edits.

## Testing Installation

1. Install Cypress

   ```sh
   npm i -D cypress
   ```

   or

   ```sh
   npm install cypress --save-dev
   ```

2. Add this command to your `scripts` in `package.json`

   ```sh
   "cypress": "cypress open"
   ```

3. Run cypress tests
   ```sh
   npm run cypress
   ```

# Features

## Pagination for fast load and Smooth User Experience

Since the news feed cann have lots of articles at a time user may get overwhemeled so a organized gallery of artilces is displayed 
using pagination where only 3 articles are displayed per column. user can easily navigate through pages using page number selecting date range.
Current API provides only 20 results but for purpose of huge data this features is very helpful and can be customised as per the need.


# Future Additions
- On click for an article, you can select an article to find out more information. After selecting an article, you will be navigated to a details page. Here you can view additional details such as a link to the New York Times article.
- Add a favoriting/bookmarking functionality and a bookmarks page
- Utilize the additional endpoints

# Technologies Used

- React
- React Router
- Cypress
- Javascript
- HTML
- CSS
- React Dev Tools (Chrome Dev Tools)

## Accessibility

Lighthouse (Chrome Dev Tools)

![Screen Shot 2025-01-28 at 2 58 47 PM]('')

# Contributors

- [Hemant D.](https://github.com/insominiac)

# Credits

- [Create React App](https://create-react-app.dev/)
- [React](https://reactjs.org/)
- [Cypress.io](https://docs.cypress.io/guides/overview/why-cypress)
- [React Router v5](https://v5.reactrouter.com/web/guides/quick-start)