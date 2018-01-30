# start-react-app

A simple CLI for scaffolding a web app with React.js.

## Features
``` 
-react
-react-router
-react-redux
-redux-thunk
-react-router-redux
-react-css-modules
-antd-mobile
-sass
-iconfont
-es6
-fetch-intercept
-lodash
-webpack
-eruda
-json-server
-faker
```

## Installation
``` 
git clone https://github.com/brandonhulala/start-react-app.git

npm install 
```

## Structure
```
|——config           -- webpack conf
|——src              -- where you put your source code
    |——index.html   -- a html file for single page
    |——main.js      -- a js file for entry
    |——router       -- react-router conf
    |——components   -- all kinds of react components
        |——app      
        |——common           
        |——login    
        |——index    
        |——acty     
        |——mine     
        ...
    |——assets       -- static resources, including image,style,and json files
    |——utils        -- js lib, including filter,fetch etc
    |——store        -- react-redux conf
|——mock             -- mock conf based on NodeJS
|——package.json     
|——.babelrc         
|——README.md        
|——favicon.ico      
|——.gitignore       
|——.editorconfig    
```

## Usage
``` 
npm run mockDev     -- open webpack-dev-server and json-server, live preview your local site in dev env

npm run mockTest    -- pack files into prod/test folder, upload them to your remote site in test env

npm run mockNormal  -- pack files into prod/normal folder, upload them to your remote site in normal env
```

## Env
* This cli provides three kinds of conf for your project env, among which, the dev env corresponds to **development** for webpack in general, the next two both refer to **produciton** and only differ in the env of your remote site.

* By entering the following URL in the browser's address bar, you can preview the running results of your code.
```
   http:// + ipv4 + :8080/dev/index.html      -- dev env
   http:// + ipv4 + :3000/test/index.html     -- test env
   http:// + ipv4 + :3000/normal/index.html   -- normal env
```

* In practice, you need to find the config/address.js file from the root, and manually add the api domain and the address of your remote site.
