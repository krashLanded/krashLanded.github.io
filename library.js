let shelf = document.querySelector('.shelf');
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

        for (i = myLibrary.length - 1; i < myLibrary.length; i++) {
            let card = document.createElement('div');
            card.classList.add('card');



            shelf.appendChild(card);
            

            card.innerHTML = myLibrary[i].title.bold() + ' by ' + myLibrary[i].author.bold() + "<br />" + "<br />" + myLibrary[i].totalPages + "/"+ myLibrary[i].completedPages;
            
        }
    }



function Book(title, author, totalPages, completedPages, checkStatus) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.completedPages = completedPages;
    this.checkStatus = checkStatus;
}


