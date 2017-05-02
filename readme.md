Simple project showcasing various features of Angular (version 4)

1. For the test we exclude the main.aot.ts and main.jit.ts files. Excluding them in the webpack or karma configurations doesn't work as the at compiler tries to compile everything in the base folder. They need to be excluded in tsconfig using the exclude property.

The tsconfig file exclude property by default excludes 'node_modules'. If you explicitly set the exclude property however, unless you explicitly set node_modules to be excluded also it will be included resulting in lots of errors!


2. Getting error: 'moduleId should be a string in "ResultsPanelComponent"'
Turns out that Angular expects a string but in Webpack module.id returns a number! Solution is to convert the module.id into a string.






