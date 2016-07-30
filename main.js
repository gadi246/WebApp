// 4 tabs onclick indication with background filling
var buls = document.querySelectorAll('.bul');
var ul = document.querySelector('.tabs > ul');
function loadFirstTabDiv(){
    var loc = 'http://127.0.0.1:8080/';
    location = loc + "#quick-reports";
}
function targeted(li) {
    li.style.background = '#ebebeb';
   li.style.color = '#646464';
}

ul.addEventListener("click", function (event) {
    if(event.target.tagName === 'A') {
        for (var i = 0; i < buls.length; i++) {
            buls[i].setAttribute('style', 'background: #646464');

        }
        if (event.target.className === "bul") {
            targeted(event.target);
        }
    }
}, true);
loadFirstTabDiv();
targeted(buls[0]);



localStorage.clear()
// select function
var select = document.querySelector('select');
var qframe = document.querySelector('.quick-frame');
var qexpand = document.querySelector('.quick-expand');
select.addEventListener('change', function(e){
    var newReport = e.target.value;
    qframe.src = newReport;
    qexpand.href = newReport;
});
var form = document.querySelector('.tabs form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var formElm = e.target;
    var formData = new FormData(formElm);
    for(var i = 0;i < select.length;i++){
        var name = formData.get('q-title' + (i + 1));
      select[i].innerText = name;
        var url = formData.get('q-url' + (i +1));
      select[i].value = url;

    }
   });



