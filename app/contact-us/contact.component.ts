import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResultsService } from '../services/results-service';
import * as Rx from 'rxjs';

import { Criteria } from './criteria';
import { CriteriaBuilder } from './criteria-builder';
import { Option } from './utils';
import { FormViewAdapter } from './form-view-adapter';
import { ParamViewAdapter } from './param-view-adapter';
import { filterOptionList } from './filter';
import { orderOptionList } from './orders';
import { printTypeOptionList } from './print-type';
import 'rxjs/add/operator/debounceTime';

@Component({
    moduleId : module.id,
    templateUrl : `./contact.component.html`,
    styleUrls : ['./styles.css']
})
export class ContactComponent {

    form: FormGroup;

    results: any = [];

    criteria: Criteria;

    /*
        options for select drops downs
    */
    printTypes: Option[] = printTypeOptionList;
    filters: Option[] = filterOptionList;
    orders: Option[] = orderOptionList;

    ngOnInit() {

        /*
            We use a builder for constructing a criteria object so that the criteria object is always in
            a consistent state. A builder is also able to specify defaults
            A Criteria object represents the criteria data model. It is different from the form model as the form
            model represents only what can be defined by the user.
        */
        let criteriaBuilder = new CriteriaBuilder();
        this.criteria = criteriaBuilder.build();

        //  a form is created from a criteria
        //  initially it will be an empty form with no values other than the default ones
        this.form = this.formBuilder.group(new FormViewAdapter(this.criteria));

        let titleStream = this.form.get('title').valueChanges;
        let authorStream = this.form.get('author').valueChanges;
        let publisherStream = this.form.get('publisher').valueChanges;
        let filterStream = this.form.get('filter').valueChanges;
        let downloadStream = this.form.get('download').valueChanges;
        let subjectStream = this.form.get('subject').valueChanges;
        let orderStream = this.form.get('order').valueChanges;
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

            // take form values, combine with old criteria to make new criteria
            this.criteria = this.prepareCriteria();
            let params: ParamViewAdapter = new ParamViewAdapter(this.criteria);
            this.router.navigate(['/contact', params.getURLParams()]);

        });

         // When the url changes we update the page. We request new results from the server
         // we also repopulate the form. This is mainly so that when the user navigates to the page with this url
         // e.g. via a bookmark, the form will be populated with data from the url.
         this.route.params
            .switchMap((params: Params) => {
                let criteriaBuilder = CriteriaBuilder.fromURLParams(params);
                let criteria = criteriaBuilder.build();
                return this.resultsService.getResults(criteria);
            })
            .subscribe((criteriaAndResults) => {
                this.criteria = criteriaAndResults.criteria;
                this.results = criteriaAndResults.results;
                this.form.reset(new FormViewAdapter(this.criteria));
            });

    }

    constructor (

        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private resultsService: ResultsService) {
    }

    prepareCriteria () {
        let form = this.form.value;

        let criteriaBuilder = new CriteriaBuilder(this.criteria);
        criteriaBuilder.title = form.title;
        criteriaBuilder.download = form.download;
        criteriaBuilder.printType = form.printType;
        criteriaBuilder.author = form.author;
        criteriaBuilder.publisher = form.publisher;
        criteriaBuilder.subject = form.subject;
        criteriaBuilder.isbn = form.isbn;
        criteriaBuilder.oclc = form.oclc;
        criteriaBuilder.lccn = form.lccn;
        criteriaBuilder.filter = form.filter;
        criteriaBuilder.order = form.order;

        return criteriaBuilder.build();

    }
}