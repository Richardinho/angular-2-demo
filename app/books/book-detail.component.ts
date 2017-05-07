import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetailService } from '../services/book-detail.service';

@Component({
    moduleId : '' + module.id,
    templateUrl : './book-detail.component.html',
    styleUrls : ['./book-detail.css']
})
export class BookDetailComponent {

    book:any = {};

    json: string = '';

    constructor (
        private route: ActivatedRoute,
        private bookDetailService: BookDetailService) {}

    ngOnInit () {


        let id = this.route.snapshot.params['id'];

        this.bookDetailService.getBookDetail(id).then(book => {
            this.book = book;
        }).catch(() => {
            this.book = {
                title : 'Macbeth'
            }
        });

    }

}