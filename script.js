const myLibrary = [];
let newCard = false;
let id;

function Book(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
    this.info = function () {
        return `${this.title}, ${this.author}, ${this.pages}, readed: ${this.readed}`;
    }
}

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
const titleInput = document.querySelector("dialog #title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readedInput = document.querySelector("#readed");



body.addEventListener("click", (e) => {
    console.log(e.target.classList + " " + e.target.classList.contains("close"));
    if (e.target.classList.contains("open")) {
        newCard = false;
        dialog.showModal();
    } else if (e.target.classList.contains("close")) {
        dialog.close();
    } else if (e.target.classList.contains("add")) {
        e.preventDefault();
        let isValide = !titleInput.value.trim() || !authorInput.value.trim() || !pagesInput.value.trim();

        console.log(isValide);
        if (!isValide) {
            if (!newCard) {
                let book = new Book(document.querySelector("#title").value, document.querySelector("#author").value, document.querySelector("#pages").value, document.querySelector("#readed").checked);
                console.log(document.querySelector("#title").value);
                console.log(book.info());
                addBookToLibrary(book);
                titleInput.value = "";
                authorInput.value = "";
                pagesInput.value = "";
                readedInput.checked = false;
            } else {
                myLibrary[id].title = titleInput.value;
                myLibrary[id].author = authorInput.value;
                myLibrary[id].pages = pagesInput.value;
                myLibrary[id].readed = readedInput.checked;
                console.log(myLibrary[id].info());
                listBooks();
            }
        } else {
            alert('Please fill in all fields.');
        }
    }
    else if (e.target.classList.contains("remove")) {
        myLibrary.splice(id, 1);
        console.log(myLibrary);
        cards.removeChild(e.target.parentElement.parentElement);
        listBooks();
    } else if (e.target.classList.contains("edit")) {
        newCard = true;
        id = e.target.parentElement.parentElement.id;
        titleInput.value = myLibrary[id].title;
        authorInput.value = myLibrary[id].author;
        pagesInput.value = myLibrary[id].pages;
        readedInput.checked = myLibrary[id].readed;
        dialog.showModal();

    }
})
function addBookToLibrary(book) {
    myLibrary.push(book);
    const div = document.createElement("div");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookIsReaded = document.createElement("p");
    const edit = document.createElement("button");
    const remove = document.createElement("button");
    const container = document.createElement("div");
    const container2 = document.createElement("div");

    edit.className = "edit";
    edit.textContent = "edit book";

    remove.className = "remove";
    remove.textContent = "remove book";

    bookTitle.textContent = "title: " + book.title;
    bookTitle.className = "bookTitle";
    bookAuthor.textContent = "author: " + book.author;
    bookAuthor.className = "bookAuthor";
    bookPages.textContent = "pages: " + book.pages;
    bookPages.className = "bookPages";
    if (book.readed) {
        bookIsReaded.textContent = "Already read it"
    } else {
        bookIsReaded.textContent = "Did not read it yet";
    }
    bookIsReaded.className = "bookIsReaded";
    console.log(myLibrary.indexOf(book));
    container2.appendChild(bookTitle);
    container2.appendChild(bookAuthor);
    container2.appendChild(bookPages);
    container2.appendChild(bookIsReaded);
    container.appendChild(edit);
    container.appendChild(remove);
    div.appendChild(container2);
    div.appendChild(container);
    div.setAttribute("id", myLibrary.indexOf(book));
    div.className = "card";
    cards.appendChild(div);
    console.log(book.title);
}

function listBooks() {
    while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
    }

    myLibrary.forEach((book) => {
        const div = document.createElement("div");
        const bookTitle = document.createElement("p");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");
        const bookIsReaded = document.createElement("p");
        const edit = document.createElement("button");
        const remove = document.createElement("button");
        const container = document.createElement("div");
        const container2 = document.createElement("div");


        edit.className = "edit";
        edit.textContent = "edit book";

        remove.className = "remove";
        remove.textContent = "remove book";

        bookTitle.textContent = "title: " + book.title;
        bookTitle.className = "bookTitle";
        bookAuthor.textContent = book.author;
        bookAuthor.className = "bookAuthor";
        bookPages.textContent = book.pages;
        bookPages.className = "bookPages";
        if (book.readed) {
            bookIsReaded.textContent = "Already read it"
        } else {
            bookIsReaded.textContent = "Did not read it yet";
        }
        bookIsReaded.className = "bookIsReaded";
        console.log(myLibrary.indexOf(book));
        div.appendChild(bookTitle);
        div.appendChild(bookAuthor);
        div.appendChild(bookPages);
        div.appendChild(bookIsReaded);
        container.appendChild(edit);
        container.appendChild(remove);
        div.appendChild(container);
        div.setAttribute("id", myLibrary.indexOf(book));
        div.className = "card";
        cards.appendChild(div);
        console.log(book.title);
    })
}


