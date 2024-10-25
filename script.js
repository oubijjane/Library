const myLibrary = [];

function Book(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
    this.info = function () {
        return `${this.title}, ${this.author}, ${this.pages}, readed: ${this.readed}`;
    }
}

/* const book1 = new Book("book1", "author1", 100, true);
const book2 = new Book("book2", "author2", 50, false);
const book3 = new Book("book3", "author3", 40, true);
console.log(book1.info());

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3); */


const body = document.querySelector("body");

const cards = document.querySelector(".cards");
const cancel = document.createElement("button");
cancel.className = "cancel";
cancel.textContent = "cancel";



const form = document.createElement("form");
const header = document.querySelector(".header");

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".open");
const closeButton = document.querySelector("dialog .close");
const add = document.querySelector("dialog form .add");

// "Show the dialog" button opens the dialog modally
/* 
showButton.addEventListener("click", () => {
    dialog.showModal();
  }); */
// "Close" button closes the dialog
/* closeButton.addEventListener("click", () => {
    dialog.close();
});

add.addEventListener("click", (e) => {
    e.preventDefault();
    let book = new Book(document.querySelector("#title").value, document.querySelector("#author").value, document.querySelector("#pages").value, document.querySelector("#readed").value );
    console.log(document.querySelector("#title").value);
    console.log(book.info());
    addBookToLibrary(book);
  }
) */

body.addEventListener("click", (e) => {
    console.log(e.target.classList + " " + e.target.classList.contains("close"));
    if (e.target.classList.contains("open")) {
        dialog.showModal();
    } else if (e.target.classList.contains("close")) {
        dialog.close();
    } else if (e.target.classList.contains("add")) {
        e.preventDefault();
        let book = new Book(document.querySelector("#title").value, document.querySelector("#author").value, document.querySelector("#pages").value, document.querySelector("#readed").value);
        console.log(document.querySelector("#title").value);
        console.log(book.info());
        addBookToLibrary(book);
    }
    else if (e.target.classList.contains("remove")) {
        console.log(e.target.parentElement.id);
        let id = e.target.parentElement.id;
        myLibrary.splice(id, 1);
        //const card = document.querySelector(id);
        cards.removeChild(e.target.parentElement);
    } else if (e.target.classList.contains("edit")) {
        console.log(e.target.parentElement.id);
        let id = e.target.parentElement.id;
        myLibrary[id].author = 'mark';
        update(myLibrary[id]);
        console.log(myLibrary[id].info());
        //const card = document.querySelector(id);
    }
})
function addBookToLibrary(book) {
    myLibrary.push(book);
    const div = document.createElement("card");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookIsReaded = document.createElement("p");
    const edit = document.createElement("button");
    const remove = document.createElement("button");

    edit.className = "edit";
    edit.textContent = "edit book";

    remove.className = "remove";
    remove.textContent = "remove book";

    bookTitle.textContent = book.title;
    bookTitle.className = "bookTitle";
    bookAuthor.textContent = book.author;
    bookAuthor.className = "bookAuthor";
    bookPages.textContent = book.pages;
    bookPages.className = "bookPages";
    bookIsReaded.textContent = book.readed;
    bookIsReaded.className = "bookIsReaded";
    console.log(myLibrary.indexOf(book));
    div.appendChild(bookTitle);
    div.appendChild(bookAuthor);
    div.appendChild(bookPages);
    div.appendChild(bookIsReaded);
    div.appendChild(edit);
    div.appendChild(remove);
    div.setAttribute("id", myLibrary.indexOf(book));
    cards.appendChild(div);
    console.log(book.title);
    /* myLibrary.forEach((book) => {
        const div = document.createElement("card");
        const bookTitle = document.createElement("p");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");
        const bookIsReaded = document.createElement("p");
        const edit = document.createElement("button");
        const remove = document.createElement("button");

        edit.className = "edit";
        edit.textContent = "edit book";

        remove.className = "remove";
        remove.textContent = "remove book";

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        bookIsReaded.textContent = book.readed;
        console.log(myLibrary.indexOf(book));
        div.appendChild(bookTitle);
        div.appendChild(bookAuthor);
        div.appendChild(bookPages);
        div.appendChild(bookIsReaded);
        div.appendChild(edit);
        div.appendChild(remove);
        div.setAttribute("id", myLibrary.indexOf(book));
        cards.appendChild(div)
        console.log(book.title)
    }
    ); */
}
function update(book) {
    const bookTitle = document.querySelector(".bookTitle");
    const bookAuthor = document.querySelector(".bookAuthor");
    const bookPages = document.querySelector(".bookPages");
    const bookIsReaded = document.querySelector(".bookIsReaded");
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    bookIsReaded.textContent = book.readed;
}


