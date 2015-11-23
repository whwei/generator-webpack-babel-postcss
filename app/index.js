'use strict';

var generators = require('yeoman-generator');
var colors     = require('colors');
var spawn      = require('cross-spawn');


module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this, arguments);
    },

    prompting: function() {
        var done = this.async();

        var prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname,
                store: true
            },
            {
                type: 'confirm',
                name: 'eslint',
                message: 'use eslint',
                default: true,
                store: true
            }
        ];

        this.prompt(prompts, function(answers) {
            // set options
            this.appName = answers.name;
            this.eslint = answers.eslint;

            done();
        }.bind(this));
    },

    scaffoldFolders: function() {
        this.mkdir('src');
        this.mkdir('src/scripts');
        this.mkdir('src/styles');
        this.mkdir('config');
    },

    copyFiles: function() {
        this.copy('editorconfig', '.editorconfig');
        this.copy('eslintrc', '.eslintrc');
        this.copy('gitignore', '.gitignore');

        var app   = 'src/scripts/_app.js';
        var index = 'src/scripts/_index.js';
        var style = 'src/styles/style.css';

        this.copy(style, 'src/styles/style.css');
    },

    generatePackageJSON: function() {
        this.template('_package.json', 'package.json', {
            appName: this.appName
        });
    },

    generateWebpackConfig: function() {
        var context = {
            scss: this.scss,
            eslint: this.eslint,
            isWindows: process.platform === 'win32'
        };

        this.template(
            'config/_webpack.config.js',
            'config/webpack.config.js',
            context
        );

        this.template(
            'config/_webpack.dev.config.js',
            'config/webpack.dev.config.js',
            context
        );

        this.template(
            'src/scripts/_index.js',
            'src/scripts/index.js',
            context
        )
    },

    generateEntry: function () {
        this.template('src/_index.html', 'src/index.html', {});
    },

    runNpm: function() {

        this.installDependencies({
            bower: false,
            callback: function() {
                console.log('\nEverything Setup! \n'.yellow);
            }
        });
    }
});
