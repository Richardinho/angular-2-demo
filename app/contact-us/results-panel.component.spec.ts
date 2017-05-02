import {} from 'jasmine';

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ResultsPanelComponent } from './results-panel';


describe('contact.component', () => {

    let comp:    ResultsPanelComponent;
    let fixture: ComponentFixture<ResultsPanelComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;

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

    it('should display original title', () => {
        comp.results = [{
            volumeInfo : {
                title : 'Hamlet, Prince of Denmark'
            }
        }];
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('[data-test=volume-title]'));
        el = de.nativeElement;
        expect(el.textContent).toContain('Hamlet, Prince of Denmark');
    });
});

