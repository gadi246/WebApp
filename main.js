(function() {// 4 tabs onclick indication with background filling
var buls = document.querySelectorAll('.bul');
var ul = document.querySelector('.tabs > ul');
var tabsContent = document.querySelectorAll('.tabs > div');

window.onload = targeted(buls[0]), openTab();

ul.addEventListener("click", function (event) {
    event.preventDefault()
    if (event.target.className === 'bul' || event.target.parentNode.className === 'bul') {
        for (var i = 0; i < buls.length; i++) {
            buls[i].classList.remove('activated');
        }
        if (event.target.className === "bul") {
            targeted(event.target);
        }
        else if (event.target.tagName === 'I') {
            targeted(event.target.parentNode)
        }
    }
}, true);

function targeted(tab) {
    tab.classList.add('activated');
    location = tab.href;
}
window.addEventListener("hashchange", openTab, false);
function openTab() {
    var newId = location.hash.slice(1);
    for (var i = 0; i < tabsContent.length; i++) {
        tabsContent[i].style.display = 'none';
        if (tabsContent[i].id === newId) {
            tabsContent[i].style.display = 'flex';
        }
    }
}


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


