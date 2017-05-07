import { NgModule, Component } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
  // <-- #1 import module

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'lazy',
        loadChildren: './lazy/lazy.module#LazyModule'
      },
      {
        path : 'books',
        loadChildren: './books/books.module#BooksModule'
      }
    ])
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
