import {} from 'jasmine';
import { FormViewAdapter } from './form-view-adapter';

let formViewAdapter;

describe('form view adapter', () => {

    describe('when instantiated without arguments', () => {

        beforeEach(() => {
            formViewAdapter = new FormViewAdapter();
        });

        it('should have default properties', () => {
            expect(formViewAdapter.title).toBe('');
            expect(formViewAdapter.download).toBe(false);
            expect(formViewAdapter.printType).toBe('all');
            expect(formViewAdapter.author).toBe('');
            expect(formViewAdapter.publisher).toBe('');
            expect(formViewAdapter.subject).toBe('');
            expect(formViewAdapter.isbn).toBe('');
            expect(formViewAdapter.lccn).toBe('');
            expect(formViewAdapter.oclc).toBe('');
            expect(formViewAdapter.filter).toBe('partial');
            expect(formViewAdapter.orderBy).toBe('newest');
        });
    });

    describe('when instantiated with a param object', () => {

        beforeEach(() => {
            formViewAdapter = new FormViewAdapter({
                title : 'my cool book',
                publisher : 'a publisher',
                oclc : '123'
            });
        });
        it('should have default properties and properties from param object', () => {
            expect(formViewAdapter.title).toBe('my cool book');
            expect(formViewAdapter.download).toBe(false);
            expect(formViewAdapter.printType).toBe('all');
            expect(formViewAdapter.author).toBe('');
            expect(formViewAdapter.publisher).toBe('a publisher');
            expect(formViewAdapter.subject).toBe('');
            expect(formViewAdapter.isbn).toBe('');
            expect(formViewAdapter.lccn).toBe('');
            expect(formViewAdapter.oclc).toBe('123');
            expect(formViewAdapter.filter).toBe('partial');
            expect(formViewAdapter.orderBy).toBe('newest');
        });
    });
});