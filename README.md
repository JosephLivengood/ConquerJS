# Boilerplate
Node/Express, MongoDB, ReactJS, and Passport Authentication boilerplate for anyone wanting to jump right into making large or small scale projects!

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e1ab5a9bbcd0407799c34736d1a03fe9)](https://www.codacy.com/app/JosephLivengood/Boilerplate?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=JosephLivengood/Boilerplate&amp;utm_campaign=Badge_Grade)
[![BCH compliance](https://bettercodehub.com/edge/badge/JosephLivengood/Boilerplate)](https://bettercodehub.com)
[![Tests](https://img.shields.io/badge/Tests-Passing-green.svg?style=flat)](https://github.com/JosephLivengood/Boilerplate/tree/master/test)
[![GitHub issues](https://img.shields.io/github/issues/JosephLivengood/Boilerplate.svg)](https://github.com/JosephLivengood/Boilerplate/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/JosephLivengood/Boilerplate.svg)](https://github.com/JosephLivengood/Boilerplate/issues)

## Structure

The aim of this project is to have an extremely scaleable solution for your next project with modularity at every point. It should be extremely simple to add or remove features including authentication strategies; it should not require editing of the low level _how_ to make it work! Files are small, understandable, and you won't find duplicate code.

#### Basic Structure:
```
Boilerplate/
  /app
    /auth
    /controllers
    /routes
  /public
    /views
    /resources
  /test
  server.js
```
#### Reducers
You will often find _'reducers'_ within packages similar to below:
```javascript
module.exports = (app, db) => {
    apiRoutes(app, db);
    publicRoutes(app, db);
    errorMiddleware(app, db);
};
```
Create your code with a clear heirarchy and package it for the future, not the present! You may even find within `apiRoutes` you have multiple types of api requests for unrelated types of data. In this case, implement a _'reducer'_ similar to above and further comparmentalize your code!
#### Advanced break down of file structure and methodology
See [PROJECTSTRUCTURE.md](PROJECTSTRUCTURE.md)

## Installation
