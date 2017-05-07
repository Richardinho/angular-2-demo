import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule, Http} from '@angular/http';
import { LazyComponent } from './lazy.component';

@NgModule({
  imports: [
    RouterModule.forChild([
     {path: '', component: LazyComponent, pathMatch: 'full'},
     //{path: 'feature', loadChildren: './feature/feature.module#FeatureModule'},
     //{path: 'lazy-feature', loadChildren: './feature/lazy-feature.module#LazyFeatureModule'}
    ]),
    HttpModule
  ],
  declarations: [LazyComponent]
})
export class LazyModule {
  constructor(http: Http) {}
}

export class SecondModule {}
