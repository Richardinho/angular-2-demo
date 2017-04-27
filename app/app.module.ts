import { NgModule, Component } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
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

    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'lazy',
        loadChildren: './lazy.module#LazyModule'
      },
      {
        path : 'contact',
        loadChildren: './contact-us/contact.module#ContactModule'
      }
    ])
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
