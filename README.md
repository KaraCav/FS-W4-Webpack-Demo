# Webpack 'Click Me' Game
Demo game to show global variables vs. using webpack
## 2211-GHP in-class demo of webpack

### Demonstrate the Game
1. When you click on the box 5 times, you win
- There's a console.log to keep track of the count as well
2. Students can open the repo and follow along - it doesn't yet have webpack
- If a .gitignore file doesn't exist, make one, and add this:
```
/node_modules
/bundle.js
```
- We haven't run npm install yet, but once we have we'll want VS Code to ignore those files

### Number 1 - Why Webpack?
1. Open inspect tools and type "win()" into the console - looks like we won!
- This is because all the variables are global. Take a look at this code in index.html:
```
  <script type="text/javascript" src="main.js"></script>
  <script type="text/javascript" src="game.js"></script>
```
- That works, but we don't want our users cheating! Replace those with:
```
<script type="text/javascript" src="bundle.js"></script>
```
- To install Webpack, use the command ``` npm install --save-dev webpack webpack-cli```
- Then, run ```npm run build``` 
- This should FAIL because there's no config file!
Add the following to a new file called webpack.config.js:
```
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  }
};
```

3. We need to tell the app what it should do when we use that command
- In the ```package.json```, in the "scripts" section, add this:
```
  "build": "webpack", 
  "build-watch": "webpack -w"
```
- Now try again: ```npm run build```

### Number 2 - Why didn't code change?
1. In game.js, we can uncomment line 15, which updates our counter statement on the page 
