const library = [];

function Book(name, author, year, pages, uuid) {
     this.name = name;
     this.author = author;
     this.year = year;
     this.pages = pages;
     this.uuid - uuid;
}

function addBookToLibrary(
    newBookName, 
    newBookAuthor, 
    newBookYear, 
    newBookPages, 
) {
    const newBook = new Book(
        newBookName, 
        newBookAuthor, 
        newBookYear, 
        newBookPages, 
        crypto.randomUUID(),
    );
    library.push(newBook);
}

// TEST
addBookToLibrary("1984", "Cooper", "1990", "740")
addBookToLibrary("1984", "Cooper", "1990", "740")
addBookToLibrary("1984", "Cooper", "1990", "740")

console.log(`Books in library: ${library.length}`)