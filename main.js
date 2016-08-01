(function() {

// select function
var select = document.querySelector('select');
var qframe = document.querySelector('.quick-frame');
var qexpand = document.querySelector('.quick-expand');


var form = document.querySelector('.tabs form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var formElm = e.target;
    var formData = new FormData(formElm);
            makeLinksObj(formData.get('q-title1'), formData.get('q-url1' ))


});


function makeLinksObj(title, url){
    localStorage.clear()
    var linkList = {};
    linkList[title] = url;
    localStorage.setItem('links', JSON.stringify(linkList));
    var opt1 = document.createElement("option");
    opt1.value = url;
    opt1.text = title;
    select.add(opt1,null);
    displayIframe();
}
    function displayIframe(){
        if(select.selectedIndex > -1){qframe.src =select.options[0].value;}
    }



    select.addEventListener('change', function (e) {
        var newReport = e.target.value;
        qframe.src = newReport;
        qexpand.href = newReport;
    });

})();//end


