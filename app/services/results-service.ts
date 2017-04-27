import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Criteria } from '../contact-us/criteria';
import { ParamViewAdapter } from '../contact-us/param-view-adapter';



function createURL(params) {
    let url = 'https://www.googleapis.com/books/v1/volumes';

    let query = Object.keys(params).reduce((memo, key) => {

        if(params[key]) {
            return memo + key + '=' + params[key] + '&';
        } else {
            return memo + '';
        }

    }, '');

    if(query.length) {
        query = query.substring(0, query.length - 1);
        url = url + '?' + query;
    }

    return url;

}

@Injectable()
export class ResultsService {


    constructor (private http: Http) {}

    getResults(criteria: Criteria) {
        let url = createURL(new ParamViewAdapter(criteria).getAPIParams());
        return this.http.get(url)
            .map(res => {
                return {
                    results : this.extractData(res),
                    criteria : criteria
                };
            })
    }

    handleError (e) {
        console.log('error occurred', e);
    }

    private extractData(res: Response) {
        let body = res.json();
        if(body.totalItems) {
            return body.items;
        } else {
            return [];
        }
    }

}
