import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultsService } from '../services/results-service';
import { HttpModule, JsonpModule } from '@angular/http';
import { ResultsPanelComponent } from './results-panel';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ContactComponent }
    ])
  ],
  declarations: [
    ContactComponent,
    ResultsPanelComponent
  ],
  providers : [ ResultsService ]
})
export class ContactModule {}