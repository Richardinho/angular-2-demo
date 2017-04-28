import { Injectable } from '@angular/core';

import { Params } from '@angular/router';

export interface APIParams {
    filter?:string;
    startIndex?:number;
    maxResults?:number;
    projection?:string;
    orderBy?:string;
    printType?:string;
    download?:string;
    q:string;
}

interface URLParams {
    filter?:string;
    startIndex?:number;
    maxResults?:number;
    projection?:string;
    orderBy?:string;
    printType?:string;
    download?:string;
    author?:string;
    title?:string;
    publisher?:string;
    subject?:string;
    isbn?:string;
    lccn?:string;
    oclc?:string;
}

@Injectable()
export class ParamUtils {

    //  the purpose of this is to take the form data and other criteria and return an object which
    //  contains the data that will be converted into a url for the address bar.
    //  Not all the form fields will be filled in so this object should only contain those properties that are.
    createURLParams (form, otherCriteria) {

        let urlData: URLParams = {};

        if (form.filter) {
            urlData.filter = form.filter;
        }
        if (form.startIndex) {
            urlData.startIndex = form.startIndex;
        }
        if (form.maxResults) {
            urlData.maxResults = form.maxResults;
        }
        if (form.projection) {
            urlData.projection = form.projection;
        }
        if (form.order) {
            urlData.orderBy = form.order;
        }
        if (form.printType) {
            urlData.printType = form.printType;
        }
        if (form.download) {
            urlData.download = 'epub';
        }
        if (form.author) {
            urlData.author = form.author;
        }
        if (form.title) {
            urlData.title = form.title;
        }
        if (form.subject) {
            urlData.subject = form.subject;
        }
        if (form.publisher) {
            urlData.publisher = form.publisher;
        }
        if (form.isbn) {
            urlData.isbn = form.isbn;
        }
        if (form.lccn) {
            urlData.lccn = form.lccn;
        }
        if (form.oclc) {
            urlData.oclc = form.oclc;
        }

        return urlData;
    }

    /*
        This should take a params object which represents params in the URL, and convert them into an object
        which can be converted into the query params for an API call
    */
    getAPIParams (params: Params) {

        let apiData: APIParams = { q : 'raeburn' };

        if (params['filter']) {
            apiData.filter = params['filter'];
        }
        if (params['startIndex']) {
            apiData.startIndex = params['startIndex'];
        }
        if (params['maxResults']) {
            apiData.maxResults = params['maxResults'];
        }
        if (params['projection']) {
            apiData.projection = params['projection'];
        }
        if (params['order']) {
            apiData.orderBy = params['order'];
        }
        if (params['printType']) {
            apiData.printType = params['printType'];
        }
        if (params['download']) {
            apiData.download = 'epub';
        }

        apiData.q = this.createQ(params);

        return apiData;
    }

    createQ (params: Params) {

        let p = [];

        if (params['title']) {
            p.push('intitle:' + params['title']);
        }
        if (params['author']) {
            p.push('inauthor:' + params['author']);
        }
        if (params['publisher']) {
            p.push('inpublisher:' + params['publisher']);
        }
        if (params['subject']) {
            p.push('insubject:' + params['subject']);
        }
        if (params['isbn']) {
            p.push('isbn:' + params['isbn']);
        }
        if (params['lccn']) {
            p.push('lccn:' + params['lccn']);
        }
        if (params['oclc']) {
            p.push('oclc:' + params['oclc']);
        }

        //  q is a required parameter for the API
        if(!p.length) {
            p.push('default');
        }

        return p.join('+');
    }

}