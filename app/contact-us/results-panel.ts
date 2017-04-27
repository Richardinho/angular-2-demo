import { Component, Input, HostBinding } from '@angular/core';

@Component({
    moduleId : module.id,
    selector : 'results-panel',
    styleUrls : ['./results-panel.css'],
    templateUrl : `./results-panel.component.html`
})
export class ResultsPanelComponent {

    @HostBinding('style.display') hostDisplay = "block";

    @Input() results: any;
}