
document.querySelector('#travelbooks').addEventListener('submit', function(event){
    var titleone = document.querySelector('#titleone').value;
    var publicone = document.querySelector('#publicone').value;
    var examplsone = document.querySelector('#examplsone').value;
    var pagesone = document.querySelector('#pagesone').value;

var travelbook = new TravelBook(titleone, publicone, examplsone, pagesone );
    var viewtravelBooks = new ViewTravelBooks();
    // вставитьь ограничения при невведении данных
    alert(" Количество глав в добавленной вами книге :" + travelbook.getChapters());

    if(titleone === '' || publicone === ''|| examplsone === ''|| pagesone === ''){
    viewtravelBooks.getMessage('Введите все данные! Книга не добавлена!', 'error');
} else{
    viewtravelBooks.addTravelBook(travelbook);
    viewtravelBooks.getMessage('Книга успешно добавлена!', 'ok');
    viewtravelBooks.clearTravelBook();
}
event.preventDefault();
});

