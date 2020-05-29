# Say So

## Overview

A hobby project to bring my Vanilla-JS-Components skills up to date.

This project:

* **Consumes a MicroService** - Supports being connected to any of several different Microservice backends:
  * [Rails](https://github.com/iq9/say-so-backend-rails)
  * [Python on Flask](https://github.com/iq9/say-so-backend-flask)
  * [Rust on Rocket](https://github.com/iq9/say-so-backend-rocket)
* **Browser Interface** - Makes XHR calls to the service for:
  * **Blog Post CRUD**
  * **Post Comment CRUD**
  * **Login**
  * **Logout**
  * **Signup**
  * **User Profile CRUD**

## Technologies

* **Vanilla.js Web Components** - Consumes a microservice.
  * **No React** - The future is browser-native Web Components. :smile:
* **JWT Tokens** - Authentication on the REST calls
* **Node.js** - Required locally to serve static assets. Not required on Prod.
* **CSS: Twitter Bootstrap** - Dark GUI and logo designed by me.
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
* **[Adobe PhotoShop](https://www.adobe.com/products/photoshop.html)**

## Screenshots

![Screen Shot 2020-04-09 at 5 01 53 PM](https://user-images.githubusercontent.com/214047/78942995-dcfe0f80-7a88-11ea-9c62-52e5d7c1dbce.png)

## Running Demo

Coming...
