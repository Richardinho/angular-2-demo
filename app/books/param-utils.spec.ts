import {} from 'jasmine';
import { ParamUtils, URLParams, APIParams } from './param-utils';
import { Params } from '@angular/router';

let paramUtils: ParamUtils;

describe('param-utils', () => {

    beforeEach(() => {

        paramUtils = new ParamUtils();

    });


    describe('createURLParams()', () => {

        let urlParams: URLParams;

        beforeEach(() => {

            let otherCriteria = {};
            let form = {
                filter : 'filter',
                download : true,
                startIndex : 3
            };

            urlParams = paramUtils.createURLParams(form, otherCriteria);
        });

        it('should create parameters for URL', () => {

            expect(urlParams.filter).toBe('filter');
            expect(urlParams.download).toBe('epub');
            expect(urlParams.startIndex).toBe(3);

        });
    });

    describe('getAPIParams', () => {

        let apiParams: APIParams;
        let params: Params;

        describe('when params object is empty', () => {

            beforeEach(() => {
                params = {};
                apiParams = paramUtils.getAPIParams(params);
            });

            it('should set default property "q"', () => {
                expect(apiParams.q).toBe('default');
            });
        });

        describe('when params has properties', () => {

            beforeEach(() => {
                params = {
                    filter : 'filter',
                    order : 'order'
                };
                apiParams = paramUtils.getAPIParams(params);
            });

            it('should set default property "q"', () => {
                expect(apiParams.q).toBe('default');
                expect(apiParams.filter).toBe('filter');
                expect(apiParams.orderBy).toBe('order');
            });
        });


        describe('when params have query properties', () => {

            beforeEach(() => {
                params = {
                    title : 'my book',
                    subject : 'a subject',
                    author : 'Robert Burns'
                };
                apiParams = paramUtils.getAPIParams(params);
            });

            it('should set default property "q"', () => {
                expect(apiParams.q).toBe('intitle:my book+inauthor:Robert Burns+insubject:a subject');
            });
        });
    });
});