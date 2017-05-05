Simple project showcasing various features of Angular (version 4)

1. For the test we exclude the main.aot.ts and main.jit.ts files. Excluding them in the webpack or karma configurations doesn't work as the at compiler tries to compile everything in the base folder. They need to be excluded in tsconfig using the exclude property.

The tsconfig file exclude property by default excludes 'node_modules'. If you explicitly set the exclude property however, unless you explicitly set node_modules to be excluded also it will be included resulting in lots of errors!


2. Getting error: 'moduleId should be a string in "ResultsPanelComponent"'
Turns out that Angular expects a string but in Webpack module.id returns a number! Solution is to convert the module.id into a string.


Questions

1. How to run tests in browser for debugging?


## Building a single page app with Angular

### intro
The new incarnation of Angular now at version 4 ( though the differences between it and version 2 are minimal), is the most cutting edge and advanced of all the front end Javascript MVC frameworks. It is designed as a one stop solution for building single page apps with performance in mind, and is built according to sound engineering principles while encorporating support for Typescript, modern build tools like Webpack and SystemJS and functional reactive programming styles.

It would be wrong to say it makes the task of building SPAs 'easy', but it certainly solves a lot of common problems in an elegant manner, paving the way for a performant and maintainable application. The first difficulty faced is learning the framework itself and this is not to be underestimated! There are many different facets to it and in order to build a production ready app it really is necessary to have a grasp of all of them. Once up and running, the framework does indeed make some tasks indeed trivial to carry out. Because however you are very much working in 'the Angular way', when you do diverge from the main line and attempt something not described in the documents, it can be challenging to build something which works with all of Angular's moving parts.

In this article I will describe my own efforts to build a single page app using Angular. The intention is for the ap to showcase as many of Angular's features as possible and also to be as close to a production app as possible too. It takes the form of a book searching tool used to query and present data from the Google Books Api.


### configuration
In this app I use Webpack for module loading and bundling. Angular supports SystemJS as well. The reason for using
Webpack is because Webpack has plugins and loaders for AOT compilation and lazy loading which I was unable to find for SystemJS. The Angular CLI tool uses Webpack and my sense is that this is the direction Angular will go in.
For a production app, it is required to have separate build config files for development, testing, and production environments.



