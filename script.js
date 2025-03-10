const library = [];

function Book(name, author, year, pages, uuid) {
     this.name = name;
     this.author = author;
     this.year = year;
     this.pages = pages;
     this.uuid - uuid;
}

function addBookToLibrary() {
    const newBook = new Book(
        newBookName, 
        newBookAuthor, 
        newBookYear, 
        newBookPages, 
        crypto.randomUUID(),
    );
    library.push(newBook);
}

