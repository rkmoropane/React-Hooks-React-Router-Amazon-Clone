# React-Hooks-React-Router-Amazon-Clone


## About: 
In this project, we diving deeper into react by mastering hooks and react router to build an Amazon Clone!

## What I learnt in this course:
- Multipage SPA. Multipage Single Page Application
- Working with Component
- Working with Fragments, Portals & Refs
- Side effects, Reducers & Context API
- Connecting to a database (Sending HTTP requests)
- Building custom React Hooks


### Multipage Single Page Application
- use routing to create multipage SPA, because React cannot use multipage routing.
- Routing simply means that different paths in the URL load different pages.
- There's a popular package called [ReactRouter](https://reactrouter.com/)
- to get started, create your react app 'amazon-clone':
run: 
```bash
npx create-react-app amazon-clone
cd amazon-clone
npm install
npm install react-router-dom
npm start
```

#### Getting started with React, 
- Use an extension [ES7 React/Redux-js Snippets](dsznajder.es7-react-js-snippets)
- type the following to do the framework:
```
rafc
```

#### To make use of the react-router-dom:
- Import the module/library 'Route' from 'react-router-dom'
```
import { Route } from 'react-router-dom'
```
- Use the 'BrowserRouter' from 'react-router-dom' inside the index.js so that we can put the `<App />` inside the closing tag `<BrowserRouter></BrowserRouter>` 

```
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```




## Questions and Answers:

What is React Routing?
 > A mechanism for defining and navigating between different views or pages in a React application.

What is the primary purpose of React Router in a React application?
 > To enable navigation and view management within a single-page application.

In a React application, what is the primary purpose of using React Router?
 > To create and manage navigation between different views or components.


Which React Router component is used to define a route in a React application?
 > `<Route>`

What does the path prop of the `<Route>` component define?
 > The exact URL of the route.

