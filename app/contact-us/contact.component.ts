import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ResultsService } from '../services/results-service';
import * as Rx from 'rxjs';
import 'rxjs/add/operator/debounceTime';

import { Option } from './utils';
import { FormViewAdapter } from './form-view-adapter';
import { ParamUtils } from './param-utils';

@Component({
    moduleId : module.id,
    templateUrl : `./contact.component.html`,
    styleUrls : ['./styles.css']
})


export class ContactComponent {

    form: FormGroup;

    results: any = [];

    /*
        options for select drops downs
    */
    printTypeOptions: Option[] = [];
    filterOptions: Option[] = [];
    orderOptions: Option[] = [];

    constructor (

        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private paramUtils: ParamUtils,
        private resultsService: ResultsService) {
    }

    ngOnInit() {

        this.form = this.formBuilder.group(new FormViewAdapter());

        let titleStream = this.form.get('title').valueChanges;
        let authorStream = this.form.get('author').valueChanges;
        let publisherStream = this.form.get('publisher').valueChanges;
        let filterStream = this.form.get('filter').valueChanges;
        let downloadStream = this.form.get('download').valueChanges;
        let subjectStream = this.form.get('subject').valueChanges;
        let orderStream = this.form.get('orderBy').valueChanges;
        let isbnStream = this.form.get('isbn').valueChanges;
        let lccnStream = this.form.get('lccn').valueChanges;
        let oclcStream = this.form.get('oclc').valueChanges;

        //  streams are created from each individual input field and merge into a single stream
        let inputStream = Rx.Observable.merge(
            titleStream,
            authorStream,
            publisherStream,
            filterStream,
            downloadStream,
            subjectStream,
            orderStream,
            isbnStream,
            lccnStream,
            oclcStream
        );

        // whenever an event happens on the input stream, we update the url
        inputStream.debounceTime(1000).forEach(val => {
            this.router.navigate(['/contact', this.paramUtils.createURLParams(this.form.value)]);
        });

        /*
            As well as the results, we get the option lists back from the server as these could change. (e.g. a new
            filter option could be added somewhere on the back end.)
            In practice it wont change very often, but our service could cache the options list locally, or else,
            as we have done here, hard code it.
        */
        this.route.params
            .switchMap((params: Params) => {
                return this.resultsService.getResultsAndCriteria(this.paramUtils.getAPIParams(params), params);
            })
            .subscribe((data) => {
                this.filterOptions = data.filterOptions;
                this.orderOptions = data.orderOptions;
                this.printTypeOptions = data.printTypeOptions;
                this.results = data.results;
                this.form.reset(new FormViewAdapter(data.params));
            });
    }
}