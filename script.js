const library = [];

const booksContainer = document.querySelector(".booksContainer");

function Book(name, author, year, pages, uuid) {
     this.name = name;
     this.author = author;
     this.year = year;
     this.pages = pages;
     this.uuid = uuid;
}

function addBookToLibrary(newBookName, newBookAuthor, newBookYear, newBookPages) {
    const newBook = new Book(
        newBookName, 
        newBookAuthor, 
        newBookYear, 
        newBookPages, 
        crypto.randomUUID()
    );
    library.push(newBook);
}

function displayBooks() {
    if (library.length === 0) {
        console.log("no books there")
    } else {
        library.forEach(function(book) {

            // Create elements for book cards
            const bookCard = document.createElement("div");
            const bookCardImg = document.createElement("img");
            const bookCardInfo = document.createElement("ul");

            // Add classes to all elements
            bookCard.classList.add("bookCard");
            bookCardImg.classList.add("cardImg");
            bookCardInfo.classList.add("cardInfo");

            // Add book properties to the card
            for (let property in book) {
                // Use only OWN properties
                if (book.hasOwnProperty(property)){
                    // Use everything except uuid
                    if (property != "uuid") {
                        const bookCardList = document.createElement("li");
                        bookCardList.classList.add("cardList");
                        // Set content for the list
                        bookCardList.textContent = `${property}: ${book[property]}`;
                        bookCardInfo.appendChild(bookCardList);
                    }  
                }   
            }
            bookCardImg.src = "./img/book.img";

            // Append elements into grid
            bookCard.appendChild(bookCardImg);
            bookCard.appendChild(bookCardInfo);

            // Add card into grid
            document.querySelector(".booksContainer").appendChild(bookCard);
        })
        console.log("there's something inside...")
    }
}
// TEST
addBookToLibrary("1984", "Cooper", "1990", "740")
addBookToLibrary("1984", "Cooper", "1990", "742")
addBookToLibrary("1984", "Cooper", "1990", "741")

displayBooks()
console.log(`Books in library: ${library.length}`)