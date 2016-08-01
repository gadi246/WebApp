// (function() {

// select function

var select = document.querySelector('select');
var qframe = document.querySelector('.quick-frame');
var qexpand = document.querySelector('.quick-expand');
var form = document.querySelector('.tabs form');
window.onload = addToSelect();



form.addEventListener('submit', function (e) {
    e.preventDefault();
    var newObj = {};
    var filled = form.elements;
    for(var i = 1;i <= 3;i++){
        if(filled['qtitle' + i].value&&filled['qurl' + i].value){
           newObj[filled['qtitle' + i].value] = filled['qurl' + i].value;
        }
    }
    saveOnLocalstorage(newObj);

});

function saveOnLocalstorage(obj){
    localStorage.clear();
    localStorage.setItem('reports', JSON.stringify(obj));
    addToSelect();
}
function addToSelect(){
    if(select.length >= 0){
       for(var j = 0;j < select.length;j++){
           select.remove(j);
       }
    }
    var newList = JSON.parse(localStorage.getItem('reports'));
    for(key in newList) {
        var opt = document.createElement("option");
        opt.value = newList[key];
        opt.text = key;
        select.add(opt, null);
        displayIframe();
    }

}
    function displayIframe(){
        if(select.selectedIndex > -1){qframe.src =select.options[0].value;}
    }



    select.addEventListener('change', function (e) {
        var newReport = e.target.value;
        qframe.src = newReport;
        qexpand.href = newReport;
    });

// })();//end


