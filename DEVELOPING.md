# Developing with ConquerJS

**Table of Contents**

- [Developing with ConquerJS](#)
	- [Dependancies](#)
		- [Bootstrap v4](#)
		- [Bootstrap Social](#)
		- [Chai/Chai-http](#)
		- [Font Awesome](#)
		- [React Tooltip](#)
		- [Sass](#)
		- [Webpack/Babel](#)
	- [React File Structure](#)

## Dependancies

### Bootstrap v4

Bootstrap is bootstrap. v4 brings added functionality and efficiency and further speeds development. One of the more notable changes is how you define columns in a row in a container. Writing anything more here would be an injustice, I recomend visiting: http://v4-alpha.getbootstrap.com/

### Bootstrap Social

This builds upon Bootstrap to make it easy to create social icons and login buttons without needing to find the correct colors and icons and positioning.

Usage is simple. In additon to adding the _btn_ class from bootstrap, you add _btn-social_ (or _btn-social-icon_) and then _btn-{social_name}_ (_btn-github_).

For more information, visit: https://lipis.github.io/bootstrap-social/

### Chai/Chai-http

Chai has several interfaces that allow the developer to choose the most comfortable. The chain-capable BDD styles provide an expressive language & readable style, while the TDD assert style provides a more classical feel.

```javascript
chai.should();
foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
tea.should.have.property('flavors')
  .with.lengthOf(3);
  
var expect = chai.expect;
expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(tea).to.have.property('flavors')
  .with.lengthOf(3);
  
var assert = chai.assert;
assert.typeOf(foo, 'string');
assert.equal(foo, 'bar');
assert.lengthOf(foo, 3)
assert.property(tea, 'flavors');
assert.lengthOf(tea.flavors, 3);
```

Chai-http is a plugin allowing you to easily test api end-points or normal http responses/headers. For example in our project:
```javascript
const chai = require('chai');
const assert = require('chai').assert;
const chaiHttp = require('chai-http');
const server = require('../../server');

//Mocha test runner code
    chai.request(server)
      .get('/_api/click-score')
      .end(function(err, res) {
        assert.equal(res.status, 200);
        assert.property(res.body, 'click_score');
        done(); //callback to mocha test runner saying we're done here
      });
```

Chai supports TONS of addons, including ones that allow you to test the UI even, like chai-webdriver:
```javascript
chai.use(chaiWebdriver(driver));
driver.get('http://chaijs.com/');
expect('nav h1').dom.to.contain.text('Chai');
expect('#node .button').dom.to.have.style('float', 'left');
```

### Font Awesome

Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS.

To see all availiable icons and all usage, visit: http://fontawesome.io/

Adding these icons is simple using just an i tag with the correct classes. Also allows you to stack icons, size icons, color icons, rotate icons, and add animations. ALL using css added through classes!

```
<i class="fa fa-camera-retro"></i>
<i class="fa fa-camera-retro 3x"></i> -larger
<i class="fa fa-camera-retro fa-spin"></i> -spinning
```

### React Tooltip

React Tooltip gives an easy clean way to add customizable tooltips to any type of object in your code. Also allows for advanced event handling or controlling the states of the tooltips as well as updating tooltips in real-time while theyre open.

Simple example:
```javascript
<p data-tip data-for='happyFace'> Hello Mr. Happy! </p>

<ReactTooltip id='happyFace' type='error'>
  <span>Show happy face</span>
</ReactTooltip>
```
Anything can activate a tooltip and anything html can be in the tooltip like lists, images, or tables.

For more information, visit: http://wwayne.com/react-tooltip/

### Sass

CSS on its own can be fun, but stylesheets are getting larger, more complex, and harder to maintain. This is where a preprocessor can help. Sass lets you use features that don't exist in CSS yet like variables, nesting, mixins, math operators, inheritance and other nifty goodies that make writing CSS fun again.

If you havn't used Sass, I strongly recomend trying it and you'll never end up going back!

Visit: http://sass-lang.com/

### Webpack/Babel

Webpack takes all of you files and their dependancies and resources and packes them up nicely to be ready for consumption by the end-user.

![webpack](https://webpack.js.org/15998c6f72bff817a85028b881f75163.svg)

A big plus for us is its ability to use babel to also compile our .jsx into those static .js files so we can server them to all our end-users without worrying about browser support/compatability.



## React File Structure
```
client/
  app/
    commonComponents/         --components that will be used often in many scenes
      */                      --package naming component
        index.jsx             --entry point for said component
        subcomponents/
          *.jsx               --components your component will use that you want to seperate out
          
    scenes/                   --a scene is a page of your site basically (eg, Login or AdminPanel)
      */
        index.jsx             --entry point to your scene with the container
        components/
          */
            index.jsx
            subComponents/
              *.jsx
              
    index.jsx                 --not used unless creating single-page app
```

This structure is not set in stone and many developers have their own personal preference, but this what you start with in terms of packaging from us. This creates a structure of seperating components by where they are where theyre used.

For example the project currently looks like:

```
client/
  app/
    commonComponents/         --no common Components used accross multiple scenes
    scenes/ 
      Home/                   --our Home scene
        index.jsx             --entry point container
        components/
          Banner/
            index.jsx         --no subComponents needed
          Login/
            index.jsx
            subComponents/
              AuthStrat.jsx   --subComponent used by Login component in Profile scene to display different auth strategies       
      Profile/                --our Profile scene
        index.jsx             
        components/
          Account/
            index.jsx         
          ClickScore/
            index.jsx
            subComponents/
              ScoreButton.jsx  
          ProfileSideBar/
            index.jsx         
          TopClickScorers/
            index.jsx
            subComponents/
              ScorerLine.jsx      
```

Each scene is a new entry point. This means we have 2 entry points to this set up as is. So in public/js there are 2 files once build: profile.bundle.js and home.bundle.js. One is the file to be loaded on the html page for the profile and the other for the home page.
To add a new scene you will need to tell webpack you've created a new entry point. This is done in the _webpack.config.js_:

```javascript
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'public/js');
var APP_DIR = path.resolve(__dirname, 'client/app');

var config = {
    entry: {
        profile: APP_DIR+"/scenes/profile/index.jsx",
        home: APP_DIR+"/scenes/home/index.jsx"
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel'
            }
        ]
    }
};

module.exports = config;
```

You will need to just add a new entry in the entry object like:

```javascript
adminpanel: APP_DIR+"/scenes/adminPanel/index.jsx"
```

Then when you rebuild `NPM run build-react` your new bundle file will be created that you can load in your respective html page to build the React app.
```
<script src='../js/adminpanel.bundle.js', type='text/javascript'></script>
```
