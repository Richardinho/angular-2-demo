# Single Page App with Angular 4


This is a single page app which provides the user with the ability to search for and view data from the Google Books Api.
The purpose of this app is to experiment with as many aspects of Angular 4 as possible. Other technologies used are Webpack, SASS, Jasmine, and of course the Google Books API.


### Configuration
There are separate configurations for testing, development and production. Webpack is used for generating builds.

#### Production environment
blahlhl

#### Dev environment
ljljj

#### Testing Environment
dfdfd
### Issues encountered during development

1. If you want to exclude files from being transpiled, they need to be excluded in the tsconfig file. (Excluding them in the Webpack config doesn't work). A 'gotcha' here though is that the exclude property has a default value. If you simply set it to those files that you wish to exclude but don't also explicitly reset the default values, the transpiler will attempt to compile those files, for example the whole of node_module!


2. In a component moduleId needs to be set to a string. Normally we use 'module.id' for this. Webpack however returns a number! Solution is to convert the module.id into a string. e.g. '' + module.id.





