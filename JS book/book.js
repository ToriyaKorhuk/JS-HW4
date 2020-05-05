function Book(title, author, year,public, exampls, id, pages){
    this.title = title;
    this.author = author;
    this.year = year;
    this.public = public;
    this.exampls = exampls;
    this.id = id;
    this.pages = pages;

};

Book.prototype.getChapters= function (){
    return Math.floor(this.pages / 25);
}
/*var book = new Book('Title1', 'Маяковский', 1928);

book.title;*/

function TravelBook(titleone, publicone, examplsone, pagesone ){
    this.titleone = titleone;
    this.publicone = publicone;
    this.examplsone = examplsone;
    this.pagesone = pagesone;


};
TravelBook.prototype.getChapters= function (){
    return Math.floor(this.pages / 5);
}