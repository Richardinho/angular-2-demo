import { Params } from '@angular/router';

/*
    Convert a params object into an object we can use to create a form group
*/
export class FormViewAdapter {

    title: string = '';
    download: boolean = false;
    printType: string = 'all';
    author: string = '';
    publisher: string = '';
    subject: string = '';
    isbn: string = '';
    lccn: string = '';
    oclc: string = '';
    filter: string = 'partial';
    orderBy : string = 'newest';

    constructor (params?: Params) {
        if (params) {
            this.title = params['title'] ? params['title'] : this.title;
            this.download = params['download'] ? params['download'] : this.download;
            this.printType = params['printType'] ? params['printType'] : this.printType;
            this.author = params['author'] ? params['author'] : this.author;
            this.publisher = params['publisher'] ? params['publisher'] : this.publisher;
            this.subject = params['subject'] ? params['subject'] : this.subject;
            this.isbn = params['isbn'] ? params['isbn'] : this.isbn;
            this.oclc = params['oclc'] ? params['oclc'] : this.oclc;
            this.lccn = params['lccn'] ? params['lccn'] : this.lccn;
            this.filter = params['filter'] ? params['filter'] : this.filter;
            this.orderBy = params['orderBy'] ? params['orderBy'] : this.orderBy;
        }
    }
}