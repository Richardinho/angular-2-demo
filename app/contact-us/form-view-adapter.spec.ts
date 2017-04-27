import {} from 'jasmine';

let formViewAdapter;

describe('form view adapter', () => {

    beforeEach(() => {

        formViewAdapter = new FormViewAdapter(criteria);
    });

    it('should..', () => {
        expect(formViewAdapter).toEqual({

            title : 'a book',
            author : 'John Writer',
            publisher : 'Super cool books',
            subject : 'interesting story',
            download : true,
            filter : 'free-ebooks',
            printType : 'magazines',
            order : 'relevance',
            isbn : '123',
            lccn '456',
            oclc : '789'

        });
    });



});