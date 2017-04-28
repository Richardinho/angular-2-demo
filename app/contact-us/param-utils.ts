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

    createURLParams (form) {

        let result: URLParams = {};

        if (form.filter) {
            result.filter = form.filter;
        }
        if (form.startIndex) {
            result.startIndex = form.startIndex;
        }
        if (form.maxResults) {
            result.maxResults = form.maxResults;
        }
        if (form.projection) {
            result.projection = form.projection;
        }
        if (form.order) {
            result.orderBy = form.order;
        }
        if (form.printType) {
            result.printType = form.printType;
        }
        if (form.download) {
            result.download = 'epub';
        }

        if (form.author) { result.author = form.author; }
        if (form.title) { result.title = form.title; }
        if (form.subject) { result.subject = form.subject; }
        if (form.publisher) { result.publisher = form.publisher; }
        if (form.isbn) { result.isbn = form.isbn; }
        if (form.lccn) { result.lccn = form.lccn; }
        if (form.oclc) { result.oclc = form.oclc; }

        return result;
    }



    getAPIParams (params: Params) {

        let result: APIParams = { q : 'raeburn' };

        if (params['filter']) {
            result.filter = params['filter'];
        }
        if (params['startIndex']) {
            result.startIndex = params['startIndex'];
        }
        if (params['maxResults']) {
            result.maxResults = params['maxResults'];
        }
        if (params['projection']) {
            result.projection = params['projection'];
        }
        if (params['order']) {
            result.orderBy = params['order'];
        }
        if (params['printType']) {
            result.printType = params['printType'];
        }
        if (params['download']) {
            result.download = 'epub';
        }

        result.q = this.createQ(params);

        return result;
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