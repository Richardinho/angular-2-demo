import {} from 'jasmine';
import { ContactComponent } from './contact.component';
import { ComponentFixture, TestBed, async, fakeAsync, tick, inject } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ResultsService } from '../services/results-service';
import { HttpModule, JsonpModule } from '@angular/http';
import { ResultsPanelComponent } from './results-panel';
import { Router, ActivatedRoute } from '@angular/router';
import { ParamUtils } from './param-utils';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';


//  todo: create page object
class RouterStub {
    navigate (arg) {}
}

class ResultsServiceStub {

    getResultsAndCriteria () {

        return Promise.resolve({
            results : [{
                volumeInfo : { title : 'To a mouse' }
            }, {
                volumeInfo : { title : 'The Pippin' }
            }]
        });
    }
}

class ActivatedRouteStub {

  private _testParams: any = Promise.resolve({});
  private subject = new BehaviorSubject(this.testParams);

  params = this.subject.asObservable();

  // Test parameters
  get testParams() { return this._testParams; }
  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }
}

describe('contact.component', () => {

    let comp: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations : [
                ContactComponent,
                ResultsPanelComponent
            ],
            imports : [
                ReactiveFormsModule,
                HttpModule,
                JsonpModule,
                CommonModule,
            ],
            providers : [
                { provide : Router,         useClass : RouterStub },
                { provide : ActivatedRoute, useClass : ActivatedRouteStub },
                { provide : ResultsService, useClass : ResultsServiceStub},
                FormBuilder,
                ParamUtils
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(ContactComponent);
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
            });
        });

    }));

    describe('On page load', () => {
        it ('should render results', async(() => {
            let titles = fixture.debugElement.queryAll(By.css('[data-test=volume-title]'));
            expect(titles.length).toBe(2);
            expect(titles[0].nativeElement.textContent).toBe('To a mouse');
            expect(titles[1].nativeElement.textContent).toBe('The Pippin');
        }));
    });
    describe('When user inputs search criteria', () => {

        it('should call navigate() on router with url and parameter object', fakeAsync(() => {
            let router = fixture.debugElement.injector.get(Router);
            const spy = spyOn(router, 'navigate');
            let author = fixture.debugElement.query(By.css('[data-test=author-input]'));
            let title = fixture.debugElement.query(By.css('[data-test=title-input]'));
            author.nativeElement.value = 'George Orwell';
            title.nativeElement.value = '1984';
            author.triggerEventHandler('input', { target : author.nativeElement });
            title.triggerEventHandler('input', { target : title.nativeElement });
            tick(1000);
            const navArgs = spy.calls.first().args[0];
            expect(navArgs).toEqual(['/contact', {
                filter : 'partial',
                printType : 'all',
                author : 'George Orwell',
                title : '1984'
            }])
        }));
    });
});