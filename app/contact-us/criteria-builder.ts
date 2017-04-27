import { Criteria } from './criteria';

export class CriteriaBuilder {

     download: boolean = false;
     filter: string = '';
     startIndex: number = 0;
     maxResults: number = 0;
     printType: string = '';
     projection: string = '';
     order: string = '';
     title: string = '';
     author: string = '';
     publisher: string = '';
     subject: string = '';
     isbn: string = '';
     lccn: string = '';
     oclc: string = '';

    static fromURLParams (params) {

        let builder =  new CriteriaBuilder();
        if(params) {
            if (params.download) {
                builder.download =  params.download;
            }
            if (params.filter) {
                builder.filter = params.filter;
            }
            if (params.startIndex) {
                builder.startIndex = params.startIndex;
            }
            if (params.maxResults) {
                builder.maxResults = params.maxResults;
            }
            if (params.printType) {
                builder.printType = params.printType;
            }
            if (params.projection) {
                builder.projection = params.projection;
            }
            if (params.orderBy) {
                builder.order = params.orderBy;
            }
            if (params.title) {
                builder.title = params.title;
            }
            if (params.author) {
                builder.author = params.author;
            }
            if (params.publisher) {
                builder.publisher = params.publisher;
            }
            if (params.subject) {
                builder.subject = params.subject;
            }
            if (params.isbn) {
                builder.isbn = params.isbn;
            }
            if (params.lccn) {
                builder.lccn = params.lccn;
            }
            if (params.oclc) {
                builder.oclc = params.oclc;
            }
            return builder;
        }
    }

     constructor (criteria? :Criteria) {
        if(criteria) {
            if (criteria.download) {
                this.download =  criteria.download;
            }
            if (criteria.filter) {
                this.filter = criteria.filter;
            }
            if (criteria.startIndex) {
                this.startIndex = criteria.startIndex;
            }
            if (criteria.maxResults) {
                this.maxResults = criteria.maxResults;
            }
            if (criteria.printType) {
                this.printType = criteria.printType;
            }
            if (criteria.projection) {
                this.projection = criteria.projection;
            }
            if (criteria.order) {
                this.order = criteria.order
            }
            if (criteria.title) {
                this.title = criteria.title;
            }
            if (criteria.author) {
                this.author = criteria.author;
            }
            if (criteria.publisher) {
                this.publisher = criteria.publisher;
            }
            if (criteria.subject) {
                this.subject = criteria.subject;
            }
            if (criteria.isbn) {
                this.isbn = criteria.isbn;
            }
            if (criteria.lccn) {
                this.lccn = criteria.lccn;
            }
            if (criteria.oclc) {
                this.oclc = criteria.oclc;
            }
        }
     }

     build () : Criteria {

         return new Criteria(
             this.download,
             this.filter,
             this.startIndex,
             this.maxResults,
             this.printType,
             this.projection,
             this.order,
             this.title,
             this.author,
             this.publisher,
             this.subject,
             this.isbn,
             this.lccn,
             this.oclc);

     }
 }
