function ViewBooks(){

};

ViewBooks.prototype.addBook = function(type){
    /*'<li>'+type.title+'</li>'*/
    var listAll = document.querySelector('#list-books');
    var ulList = document.createElement('ul');

    ulList.innerHTML = '<li>'+ type.title+'</li>'+
    '<li>'+ type.author +'</li>'+
    '<li>'+ type.year +'</li>'+
    '<li>'+ type.public +'</li>'+
    '<li>'+ type.exampls +'</li>'+
    '<li>'+ type.id +'</li>'+
    '<li>'+ type.pages +'</li>'+
    '<li><button class="delete" id="delete">Удалить</button></li>';

    listAll.appendChild(ulList);
    
};

ViewBooks.prototype.getMessage = function(message, nameCl){
    var block = document.createElement('div');
    block.className = nameCl;
    block.innerHTML = message;

    var container = document.querySelector('.container');
    var form = document.querySelector('#books');

    container.insertBefore(block, form); /*добавление перед формой сообщения */
};
 
ViewBooks.prototype.clear = function(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#year').value = '';
    document.querySelector('#public').value = '';
    document.querySelector('#exampls').value = '';
    document.querySelector('#id').value = '';
    document.querySelector('#pages').value = '';

};

// document.getElementById('#delete').onclick = removeElement;

// function removeLi(){
//     document.getElementById('#delete').remove();
// 

// TRAVEL
function ViewTravelBooks(){

};
ViewTravelBooks.prototype.addTravelBook = function (type){
    var listAll = document.querySelector('#travel-books');
    var ulList = document.createElement('ul');
    ulList.innerHTML = `<li>${type.titleone}</li><li>${type.publicone}</li><li>${type.examplsone}</li><li>${type.pagesone}</li><li><button class=\\"delete\\">Удалить</button></li>`;
    listAll.appendChild(ulList);
};
ViewTravelBooks.prototype.getMessage = function(message, nameCl){
    var block = document.createElement('div');
    block.className = nameCl;
    block.innerHTML = message;

    var container = document.querySelector('.container');
    var form = document.querySelector('#travel-books');

    container.insertBefore(block, form); /*добавление перед формой сообщения */
};
 ViewTravelBooks.prototype.clearTravelBook = function(){
    document.querySelector('#titleone').value = '';
    document.querySelector('#publicone').value = '';
    document.querySelector('#examplsone').value = '';
    document.querySelector('#pagesone').value = '';



 }