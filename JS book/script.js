document.querySelector('#books').addEventListener('submit', function(event){
    var title = document.querySelector('#title').value;
    var author = document.querySelector('#author').value;
    var year = document.querySelector('#year').value;
    var public = document.querySelector('#public').value;
    var exampls = document.querySelector('#exampls').value;
    var id = document.querySelector('#id').value;
    var pages = document.querySelector('#pages').value;



    var book = new Book(title, author, year, public, exampls, id, pages);
    alert(" Количество глав в добавленной вами книге :" + book.getChapters());
    var viewBooks = new ViewBooks();

    if(title === '' || author === '' || year === ''|| public === ''|| exampls === ''|| id === ''|| pages === ''){
        viewBooks.getMessage('Введите все данные! Книга не добавлена!', 'error');
    } else{
        viewBooks.addBook(book);
        viewBooks.getMessage('Книга успешно добавлена!', 'ok');
        viewBooks.clear();
    }

    event.preventDefault();
});
// TravelBook


