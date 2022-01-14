# This will be the Backend Folder

```
$ npm init [We need to install empty package.json]
$ npm install express[We need to install Express.js]

```
As we want to import express by typing 'import express from 'express';' . Thus we need to write in package.json:

```
"main": "index.js",
"type": "module",

```
```
$ npm install nodemon [It'll detect the changes automatically]

```

Thus we need to write in package.json:

```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "nodemon index.js"
},

```

```
$ npm i mongoose [Install the package inside server folder]

```

```
$ npm i axios [To call the APIs in Frontend we need to install axios inside client folder]

```

```
$ npm i cors [In server folder]

```

```
$ npm i body-parser

```
