# generator-u51-web

## What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)


## Getting Started
```bash
npm install -g generator-webpack-babel-postcss
```

## Create Project
```bash
mkdir myapp
cd myapp
yo webpack-babel-postcss
```
## Generated Project
```
+-- myapp
    +-- config
        --- webpack.config.js
        --- webpack.dev.config.js
    +-- src
        +-- scripts
            --- index.js
        +-- index.html
    +-- node_modules
    +-- build *
        --- index.html *
        --- scripts/app.js *
    --- .editorconfig
    --- .eslintrc
    --- package.json

```
- `*`: generated after running `npm run build`

## Usage
-   `npm run dev`: start for development
-   `npm run build`: build dist version


## Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).
