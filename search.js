var search = UTILS.qs('.search-box');
UTILS.addEvent(search, 'submit', function(e){
    e.preventDefault();
    var item = this.elements['search'].value;
    searchItem(item);

});
function searchItem(item) {
    var result = false;
   for(var i = 0;i < select.length;i++){
       for(var j = 0;j < select[i].length;j++){
           if(select[i][j].text === item){
               renderSearchRes(select,i,j);
               result = true;
           }
       }
   }
   if(!result){
       notif.innerHTML = '<span>' + 'The searched report "' + item + '" was not found' + '</span>';
   }
}
function renderSearchRes(select, i, j){
    TABS.goToTabs(select[i].dataset.index);
    select[i].selectedIndex = j;
    UTILS.emitEvent(select[i], 'change');
}

