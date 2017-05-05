import 'reflect-metadata';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';
console.log('hello world, jit');
platformBrowserDynamic().bootstrapModule(AppModule);
