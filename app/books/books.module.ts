import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultsService } from '../services/results-service';
import { HttpModule, JsonpModule } from '@angular/http';
import { ResultsPanelComponent } from './results-panel.component';
import { ParamUtils } from './param-utils';
import { BookDetailComponent } from './book-detail.component';
import { BookDetailService } from '../services/book-detail.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BooksComponent },
      { path : 'book', component: BookDetailComponent }
    ])
  ],
  declarations: [
    BooksComponent,
    BookDetailComponent,
    ResultsPanelComponent
  ],
  providers : [
    ResultsService,
    ParamUtils,
    BookDetailService
  ]
})
export class BooksModule {}