import { Criteria } from './criteria';
// todo split into separate classes for url and api params
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

interface APIParams {
    filter?:string;
    startIndex?:number;
    maxResults?:number;
    projection?:string;
    orderBy?:string;
    printType?:string;
    download?:string;
    q:string;
}

export class ParamViewAdapter {

    criteria: Criteria;

    constructor (criteria: Criteria) {
        this.criteria = criteria;
    }

    getURLParams () {

        let result: URLParams = {};

        if (this.criteria.filter) {
            result.filter = this.criteria.filter;
        }
        if (this.criteria.startIndex) {
            result.startIndex = this.criteria.startIndex;
        }
        if (this.criteria.maxResults) {
            result.maxResults = this.criteria.maxResults;
        }
        if (this.criteria.projection) {
            result.projection = this.criteria.projection;
        }
        if (this.criteria.order) {
            result.orderBy = this.criteria.order;
        }
        if (this.criteria.printType) {
            result.printType = this.criteria.printType;
        }
        if (this.criteria.download) {
            result.download = 'epub';
        }

        if (this.criteria.author) { result.author = this.criteria.author; }
        if (this.criteria.title) { result.title = this.criteria.title; }
        if (this.criteria.subject) { result.subject = this.criteria.subject; }
        if (this.criteria.publisher) { result.publisher = this.criteria.publisher; }
        if (this.criteria.isbn) { result.isbn = this.criteria.isbn; }
        if (this.criteria.lccn) { result.lccn = this.criteria.lccn; }
        if (this.criteria.oclc) { result.oclc = this.criteria.oclc; }

        return result;
    }

    getAPIParams () {

        let result: APIParams = { q : 'raeburn' };

        if (this.criteria.filter) {
            result.filter = this.criteria.filter;
        }
        if (this.criteria.startIndex) {
            result.startIndex = this.criteria.startIndex;
        }
        if (this.criteria.maxResults) {
            result.maxResults = this.criteria.maxResults;
        }
        if (this.criteria.projection) {
            result.projection = this.criteria.projection;
        }
        if (this.criteria.order) {
            result.orderBy = this.criteria.order;
        }
        if (this.criteria.printType) {
            result.printType = this.criteria.printType;
        }
        if (this.criteria.download) {
            result.download = 'epub';
        }

        result.q = this.createQ();

        return result;
    }

    createQ () {

        let params = [];

        if (this.criteria.title) {
            params.push('intitle:' + this.criteria.title);
        }
        if (this.criteria.author) {
            params.push('inauthor:' + this.criteria.author);
        }
        if (this.criteria.publisher) {
            params.push('inpublisher:' + this.criteria.publisher);
        }
        if (this.criteria.subject) {
            params.push('insubject:' + this.criteria.subject);
        }
        if (this.criteria.isbn) {
            params.push('isbn:' + this.criteria.isbn);
        }
        if (this.criteria.lccn) {
            params.push('lccn:' + this.criteria.lccn);
        }
        if (this.criteria.oclc) {
            params.push('oclc:' + this.criteria.oclc);
        }

        //  q is a required parameter for the API
        if(!params.length) {
            params.push('default');
        }

        return params.join('+');
    }
}