
    const myLibrary =
    [];

   

    function getValues() {
        title = document.getElementById('title').value;
        author = document.getElementById('author').value;
        totalPages = document.getElementById('tpages').value;
        completedPages = document.getElementById('cpages').value;
        checkStatus = document.getElementById('read-status').checked;


        let currentBook = new Book(title, author, totalPages, completedPages, checkStatus);

        myLibrary.push(currentBook);

    }



function Book(title, author, totalPages, completedPages, checkStatus) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.completedPages = completedPages;
    this.checkStatus = checkStatus;
}


let exampleBook = new Book('Example Book', 'Eric Q.', '21', '5', false);
myLibrary.push(exampleBook);

 