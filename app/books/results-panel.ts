import { Component, Input, HostBinding } from '@angular/core';

@Component({
    moduleId : '' + module.id,  //  see readme for explanation for this.
    selector : 'results-panel',
    styleUrls : ['./results-panel.css'],
    templateUrl : `./results-panel.component.html`
})
export class ResultsPanelComponent {

    @HostBinding('style.display') hostDisplay = "block";

    @Input() results: any;
}