import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BookDetailService {

    constructor (private http: Http) {}

    getBookDetail (id: string) {
        let url = this.createURL(id);

        return this.http.get(url).map(data => {

            console.log(data);

            return data.json();


        }).toPromise();
    }

    createURL(id: string) {

        return `https://www.googleapis.com/books/v1/volumes/${id}`;

    }
}