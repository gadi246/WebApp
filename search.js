var search = UTILS.qs('.search-box');
UTILS.addEvent(search, 'submit', function(e){
    e.preventDefault();
    var item = this.elements['search'].value;
    searchItem(item);

});
function searchItem(item) {
   for(var i = 0;i < select.length;i++){
       for(var j = 0;j < select[i].length;j++){
           if(select[i][j].text === item){
               TABS.goToTabs(select[i].dataset.index);
               select[i].selectedIndex = j;
               UTILS.emitEvent(select[i], 'change');

           }
       }
   }
}

