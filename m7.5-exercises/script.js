class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    read() {
        return `Reading ${this.name}`;
    }
}

const book1 = new Book("Harry", "JK", 32);

class Magazine extends Book {
    constructor(title, author, price, month) {
        super(title, author, price);
        this.month = month;
    }
    buy() {
        return `Buy ${month} magazine`;
    }
}