import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Params } from '@angular/router';

import { printTypeOptions } from '../contact-us/print-type';
import { orderOptions } from '../contact-us/orders';
import { filterOptions } from '../contact-us/filters';
import { APIParams } from '../contact-us/param-utils';



function createURL(params: APIParams) {
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

    getResultsAndCriteria (apiParams: APIParams, params: Params) {
        let url = createURL(apiParams);
        return this.http.get(url)
            .map(res => {
                return {
                    results : this.extractData(res),
                    filterOptions : filterOptions,
                    orderOptions : orderOptions,
                    printTypeOptions : printTypeOptions,
                    params : params  // just pass these through back to calling code
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
