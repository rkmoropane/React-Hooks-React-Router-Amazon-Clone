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
- type the following to do the framework tp get started with simple jsx structure in React:
```
rafce
```
 > the above uses the extension you just downloaded to get the React structure into your jsx.
#### The React Router Dom frameworks/Libraries
- The `<Link>` component in React Router, renders a hyperlink for navigation to a specific route.
 > The prop is commonly used with the `<Link>` component to specify the target route in React Router is `to`

- The primary purpose of the `<Switch>` component in React Router, it is that it conditionally renders the first `<Route>` or `<Redirect>` that matches the current location.
 > When the 'exact' prop is not used with a dynamic route inside a `<Switch>` component, the dynamic route matches exactly, but sub-routes are also matched.


#### To make use of the react-router-dom:
- Import the module/library 'Route' from 'react-router-dom'
```
import { Route } from 'react-router-dom'
```
- Use the 'BrowserRouter' from 'react-router-dom' inside the index.js so that we can put the `<App />` inside the closing tag `<BrowserRouter></BrowserRouter>` 

```example. jsx
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

## To make use of the Firebase & Setting it up:
- you need to login using your gmail account to create a project: `https://firebase.google.com/`
- Create a project. Click on `Get started by setting up a Firebase project` and follow all the prompt instructions.
- Create an app, then linking it to Firebase Hosting Site.
- Install the firebase in your terminal:
```
sudo npm install install -g firebase-tools && npm install firebase
```
then login
```
firebase login
```
- connect to your firebase app in the `firebase.js` file.
```
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANOP2xbehJQFJMzDGwQR-Vdx4m-uIpUXM",
  authDomain: "zaio--clone-7b275.firebaseapp.com",
  projectId: "zaio--clone-7b275",
  storageBucket: "zaio--clone-7b275.firebasestorage.app",
  messagingSenderId: "568990020591",
  appId: "1:568990020591:web:fc161a3188be5130013c1a",
  measurementId: "G-Z97KF9B27W"
};
<!-- initiallise the firebase app -->
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
```


## Questions and Answers:
---

# Quick Answer Key

| # | Topic | Correct Answer |
|---|---|---|
| 1 | JSX enclosing tags | JSX requires at least one root element |
| 2 | JSX single root violation | `<h1>Hello</h1><p>World</p>` |
| 3 | JSX root requirement | JSX is designed to enforce a clear component structure |
| 4 | Wrapper component | Encapsulate and extend another component |
| 5 | Wrapper props | Spread operator `{...props}` |
| 6 | Wrapper advantage | Encapsulates specific functionality, making it reusable |
| 7 | Fragments | Group elements without an additional DOM node |
| 8 | Fragment syntax | `<Fragment>...</Fragment>` |
| 9 | Fragment shorthand | `<>...</>` |
| 10 | Portals | Render outside normal parent-child DOM hierarchy |
| 11 | Portal API | `ReactDOM.createPortal()` |
| 12 | Portal use case | Modal dialogs or popovers |
| 13 | Refs | Access/interact with DOM or React elements |
| 14 | Create ref | `createRef()` |
| 15 | Use ref | Attach to React/DOM element |
| 16 | useEffect | Perform side effects |
| 17 | useEffect timing | After every render |
| 18 | Control useEffect | Dependency array |
| 19 | Dependency array | Defines dependencies that trigger the effect |
| 20 | Empty dependency array | Run only during initial render |
| 21 | Effect cleanup | Return a cleanup function |
| 22 | Cleanup purpose | Unsubscribe and prevent memory leaks |
| 23 | useReducer | Manage component state |
| 24 | useReducer arguments | Reducer function + initial state |
| 25 | useReducer return | Array containing state + dispatch |
| 26 | useEffect vs useReducer | State management vs side effects |
| 27 | Reducer | Handles state transitions based on actions |
| 28 | useReducer arguments | Reducer function + initial state |
| 29 | React Context | Share values without explicitly passing props |
| 30 | Context problem | Avoids prop drilling |
| 31 | Context Provider | `context` prop *(course expected answer)* |
| 32 | Context purpose | Share global state and values |
| 33 | Consume Context | `useContext` |
| 34 | Multiple contexts | Use `useContext` multiple times |
| 35 | Dynamic Context | Changes value dynamically at runtime |
| 36 | Update dynamic Context | Directly modifying context value *(course expected answer)* |
| 37 | Custom Context | Created using `createContext` |
| 38 | Default Context value | Pass value to `createContext` |
| 39 | Firebase Authentication | Authentication and authorization |
| 40 | Enable Firebase Auth | Firebase Console → Authentication |
| 41 | Auth state changes | Observable auth state events |
| 42 | Checkout process | Payment and order completion |
| 43 | Checkout responsibility | Calculate/display total order cost |
| 44 | Checkout state | All of the above |
| 45 | onClick | `onClick` attribute |
| 46 | onChange | Value of input changes |
| 47 | checked | Check/uncheck programmatically |
| 48 | Cloud Functions | Serverless backend logic |
| 49 | exports | Export the function |
| 50 | Cloud Function context | Execution context |
| 51 | Python async/await | Define asynchronous functions |
| 52 | useEffect async tasks | Side effects and cleanup |
| 53 | useEffect error handling | Second function *(course expected answer)* |
| 54 | Import React | `import React from 'react';` |
| 55 | React list key | `key={item.id}` |
| 56 | Key importance | Unique identifier for efficient updates |
| 57 | Firestore organization | Documents and subcollections |
| 58 | Add Firestore data | `set()` method |
| 59 | Firestore transaction | Perform multiple operations atomically |

---

# Quick Memory Guide

```text
JSX
  → One root element

Wrapper
  → Encapsulate and reuse functionality

Fragment
  → Group elements without an extra DOM node

Portal
  → Render outside the normal DOM hierarchy

Ref
  → Direct DOM/React element access

useEffect
  → Side effects

useReducer
  → State management

Context
  → Share values / avoid prop drilling

useContext
  → Consume Context

Dynamic Context
  → Value changes at runtime

Firebase Authentication
  → Authentication and authorization

Cloud Functions
  → Serverless backend logic

Firestore
  → Documents and subcollections

Transaction
  → Atomic database operations

React key
  → Unique identifier for list items
```
