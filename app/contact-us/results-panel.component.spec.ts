import {} from 'jasmine';

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ResultsPanelComponent } from './results-panel';


describe('results-panel.component', () => {

    let comp:    ResultsPanelComponent;
    let fixture: ComponentFixture<ResultsPanelComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ResultsPanelComponent ], // declare the test component
      })
      .compileComponents();  // compile template and css
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(ResultsPanelComponent);
        comp = fixture.componentInstance;
    });

    it('should display titles', () => {
        comp.results = [{
            volumeInfo : {
                title : 'Hamlet, Prince of Denmark',
                imageLinks : {}
            }
        },{
            volumeInfo : {
                title : 'Critique of Pure Reason',
                imageLinks : {}
            }
        }];
        fixture.detectChanges();

        let titles = fixture.debugElement.queryAll(By.css('[data-test=volume-title]'));

        expect(titles.length).toBe(2);

        let titleOneEl = titles[0].nativeElement;
        let titleTwoEl = titles[1].nativeElement;
        expect(titleOneEl.textContent).toContain('Hamlet, Prince of Denmark');
        expect(titleTwoEl.textContent).toContain('Critique of Pure Reason');
    });
});

