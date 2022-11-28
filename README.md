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
2. That works, but we don't want our users cheating! Replace those with:
```
<script type="text/javascript" src="bundle.js"></script>
```
- First, use the command ```run npm install```, then ```npm run build```

3. We need to tell the app what it should do when we use that command
- In the ```package.json```, in the "scripts" section, add this:
```
  "build": "webpack", 
  "build-watch": "webpack -w"
```
- Now try again: ```npm run build```

### Number 2 - Why didn't code change?
1. In game.js, we can uncomment line 15, which updates our counter statement on the page 
