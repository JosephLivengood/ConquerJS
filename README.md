# Boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/JosephLivengood/Boilerplate.svg)](https://greenkeeper.io/)
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
const apiRoutes = require('./api/apiIndex.js');
const publicRoutes = require('./public/publicIndex.js');
const errorMiddleware = require('./errorMiddleware.js');

module.exports = (app, db) => {
    apiRoutes(app, db);
    publicRoutes(app, db);
    errorMiddleware(app, db);
};
```
__Remember, files should have 1 specific focus and be organized!__
Create your code with a clear heirarchy and package it for the future, not the present! You may even find within `apiRoutes`, for example, you have multiple types of api requests for unrelated types of data. In this case, implement a _'reducer'_ similar to above and further comparmentalize your code!

#### Advanced break down of file structure and methodology
See [PROJECTSTRUCTURE.md](PROJECTSTRUCTURE.md)

## Installation and Starting
#### For contributing(see [CONTRIBUTING.md](CONTRIBUTING.md)):
```
(Fork/pull)
npm install
cp sample.env .env
(Branch, LEAVE MASTER CLEAN)
```
#### For personal projects:
```
git clone https://github.com/JosephLivengood/Boilerplate.git (Or the version desired)
rm -r .git
git init
npm install
cp sample.env .env
```
### First run

##### Set enviromental variables in `.env`
* Database should look similar to `mongodb://[username]:[password]@12345.mlab.com:17109/boilerplate`
* Ignore TEST_USER_ID for this step
* Obtain auth client id and secrets from atleast 1 service (GitHub recomended in acount settings)- for local development(w/ GitHub), the callback url is `http://localhost:8080/auth/github/callback`

##### Execute `NPM start`
```
Successful database connection
App listening on port 8080
```

##### Authenticate at http://localhost:8080/auth/github
* Take note of the returned user `id` (not `_id`)

##### Set final enviromental variable in `.env`
* TEST_USER_ID should be set equal to your `id`- this is used in unit/functional tests to simulate an authenticated user when testing pages requiring such

### Running
* `NPM start` will connect to the database and start the server.

## Tests
* To execute all tests, run `NPM Tests`

## Development (for personal projects)
_coming soon_

## Deployment (for personal projects)
* Be sure to edit your authentication strategies on their respective websites to point the callback to your deployment url.
* Be sure to change `config.json` `"app_url"` to your correct deployment root url.
* Ensure tests pass before deploying and be sure to webpack any changes.

***

# License

BSD 3-Clause License

Copyright (c) 2017, Joseph Livengood. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
