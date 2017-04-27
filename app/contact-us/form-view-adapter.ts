import { Criteria } from './criteria';

export class FormViewAdapter {

    title: string;
    download: boolean;
    printType: string;
    author: string;
    publisher: string;
    subject: string;
    isbn: string;
    lccn: string;
    oclc: string;
    filter: string;
    order : string;

    constructor (criteria: Criteria) {

        this.title = criteria.title;
        this.download = criteria.download;
        this.printType = criteria.printType ? criteria.printType : 'all';
        this.author = criteria.author;
        this.publisher = criteria.publisher;
        this.subject = criteria.subject;
        this.isbn = criteria.isbn;
        this.oclc = criteria.oclc;
        this.lccn = criteria.lccn;
        this.filter = criteria.filter ? criteria.filter : 'partial';
        this.order = criteria.order ? criteria.order : 'newest';
    }
}