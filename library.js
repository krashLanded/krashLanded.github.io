let shelf = document.querySelector('.shelf');
let form = document.getElementById('book-title');

    const myLibrary =
    [];

    function addBookToLibrary() {
        title = document.getElementById('title').value;
        author = document.getElementById('author').value;
        totalPages = document.getElementById('tpages').value;
        completedPages = document.getElementById('cpages').value;
        checkStatus = document.getElementById('read-status').checked;

        if (title == '' || author == '' || totalPages == '' || completedPages == '' ) {
            alert('no');
            return false;
        };

        if (totalPages.match(/^[0-9]+$/) == null || totalPages.match(/^[0-9]+$/) == null) {
            alert('not a number');
            return false;
        }
        
        if (completedPages > totalPages) {
            alert('You read more pages than there are in the book!');
            return false;
        }

        if(completedPages == totalPages) {
            checkStatus = true;
        }

        let currentBook = new Book(title, author, totalPages, completedPages, checkStatus);

        myLibrary.push(currentBook);

        for (i = myLibrary.length - 1; i < myLibrary.length; i++) {

            let card = document.createElement('div');
            card.classList.add('card');

            shelf.appendChild(card);
            
            if (myLibrary[myLibrary.length - 1].checkStatus == false) {

            card.innerHTML = myLibrary[i].title.bold() + ' by ' + myLibrary[i].author.bold() + "<br />" + "<br />" + myLibrary[i].completedPages + "/"+ myLibrary[i].totalPages + "<br />" + "<br />" + '<b>NOT READ</b>';

            } else if (myLibrary[myLibrary.length - 1].checkStatus == true) {
                card.innerHTML = myLibrary[i].title.bold() + ' by ' + myLibrary[i].author.bold() + "<br />" + "<br />" + myLibrary[i].completedPages + "/"+ myLibrary[i].totalPages + "<br />" + "<br />" + '<b>READ</b>';
            }

        }

       form.reset();

    }



function Book(title, author, totalPages, completedPages, checkStatus) {
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.completedPages = completedPages;
    this.checkStatus = checkStatus;
}


