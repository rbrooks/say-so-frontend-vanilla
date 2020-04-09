# Say So

## Overview

A hobby project to bring my Ruby, Rails, and Vanilla-JS-Components skills up to date.

This project:

* **Consumes a Rails MicroService** - Backed by Rails 5 and SQLite
* **Browser Interface** - Makes XHR calls to the service for:
  * **Blog Post CRUD:**
  * **Post Comment CRUD:**
  * **Login:**
  * **Logout:**
  * **Signup:**
  * **User Profile CRUD:**

## Technologies

* **Vanilla.js Web Components** - Consumes a Rails microservice.
  * **No React** - The future (that arrived 3 years ago) is browser-native Web Components. :smile:
* **JWT Tokens** - Authentication on the REST calls
* **Node.js** - 13.8. Required locally to serve static assets. Not required on Prod.
* **SCSS** - Dark GUI styled by hand
  * **Resposive Design** - Adapts to mobile
* **Babel & WebPack** - Latest versions. Transpilation and ES6 support
  * **Hot Module Replacement (HMR)** - Auto-recompiles and refreshes browser on every code change.

## Setup

From the root of this proj:

`$ npm install`
`$ npm run start`

Open http://localhost:8080/ to view the app.

The WebPack transpile will happen automatically; no having to run `npm run build` every time.

The Rails MicroService must be running on **Port 3000** for the app to work. It makes REST calls to it.

## Tools

* **MacOS**
* **[VS Code](https://code.visualstudio.com/)**
* **[Table Plus](https://tableplus.com/)**
* **[Kitematic](https://kitematic.com/)**
* **[Adobe PhotoShop](https://www.adobe.com/products/photoshop.html)**

## Screenshots

Coming...

## Running Demo

Coming...