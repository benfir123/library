//Create book class

class Book {
    constructor(author, title, pages, isRead) {
        this.author = author
        this.title = title
        this.pages = pages
        this.isRead = isRead
    }
    toggleReadStatus() {
        if (this.isRead) {
            this.isRead = false;
        } else {
            this.isRead = true;
        }
        displayLibrary();
    }
 }

//Create array for all the book objects and populate it with the initial book

let myLibrary = [];
const book = new Book('Chris Voss', 'Never Split the Difference', 274, true)
myLibrary.push(book)
displayLibrary();

//Function to take user input and add it as a book object to our main array

function addBookToLibrary() {
    const form = document.querySelector('form');
    const button = document.getElementById('modal-button')

    const author = document.getElementById('author').value
    const title = document.getElementById('title').value
    const pages = document.getElementById('pages').value
    const isRead = document.getElementById('isRead').checked

    const book = new Book(author, title, pages, isRead)
    myLibrary.push(book)

    form.reset();
    button.click();
    displayLibrary();
    
}

//Function to loop through all book objects in array and display them as cards in the library

function displayLibrary() {

    row.replaceChildren();
    
    myLibrary.forEach(book => {

        const title = document.createElement('h5');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const isReadButton = document.createElement('a');
        const removeButton = document.createElement('a');
        const cardBody = document.createElement('div');
        const card = document.createElement('div');
        const cardColumn = document.createElement('div');
        const row = document.getElementById('row');

        title.textContent = book.title;
        title.classList.add("card-title");
        author.textContent = book.author;
        author.classList.add("card-text");
        pages.textContent = book.pages + " pages";
        pages.classList.add("card-text");
        
        isReadButton.classList.add("btn");


        if (book.isRead) {
            isReadButton.classList.toggle("btn-success")
            isReadButton.textContent = "Read";
        } else {
            isReadButton.classList.toggle("btn-danger")
            isReadButton.textContent = "Not Read";
        }

        
        isReadButton.classList.add("d-block");
        isReadButton.classList.add("mb-2")
        removeButton.textContent = "Remove";
        removeButton.classList.add("btn");
        removeButton.classList.add("btn-secondary");
        removeButton.classList.add("d-block");
        
        cardBody.appendChild(title)
        cardBody.appendChild(author)
        cardBody.appendChild(pages)
        cardBody.appendChild(isReadButton)
        cardBody.appendChild(removeButton);

        removeButton.addEventListener('click', () => {
            myLibrary.splice(myLibrary.indexOf(book),1);
            displayLibrary();
        });

        isReadButton.addEventListener('click', () => {
            book.toggleReadStatus();
        })


        cardBody.classList.add("card-body");

        card.appendChild(cardBody)
        card.classList.add("card");
        card.classList.add("h-100");

        cardColumn.classList.add("col-sm-6")
   
        cardColumn.appendChild(card)
        
        row.appendChild(cardColumn);    

    }
    )
}

