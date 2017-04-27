

export class Criteria {

    readonly download: boolean;
    readonly filter: string;
    readonly startIndex: number;
    readonly maxResults: number;
    readonly printType: string;
    readonly projection:  string;
    readonly order: string;
    readonly title: string;
    readonly author: string;
    readonly publisher: string;
    readonly subject: string;
    readonly isbn: string;
    readonly lccn: string;
    readonly oclc: string;

    constructor(
        download: boolean,
        filter: string,
        startIndex: number,
        maxResults: number,
        printType: string,
        projection : string,
        order: string,
        title: string,
        author: string,
        publisher: string,
        subject: string,
        isbn: string,
        lccn: string,
        oclc: string
        ) {

        this.download = download;
        this.filter = filter;
        this.startIndex = startIndex;
        this.maxResults = maxResults;
        this.printType = printType;
        this.projection = projection;
        this.order = order;
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.subject = subject;
        this.isbn = isbn;
        this.lccn = lccn;
        this.oclc = oclc;
    }
}



