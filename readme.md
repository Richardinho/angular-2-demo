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

1. If you want to exclude files from being transpiled, they need to be excluded in the tsconfig file. (Excluding them in the Webpack config doesn't work). A 'gotcha' here though is that the exclude property has a default value which excludes files such as those within node_module folder. If you fail to explicitly set these default values within the exclude array then the transpiler will attempt to compile them and likely result in errors.


2. In a component, moduleId is normally set using `module.id`. Angular expects moduleId to be a string but Webpack's implementation of `module.id` returns a number! Solution is to convert the module.id into a string. e.g. `'' + module.id`.





