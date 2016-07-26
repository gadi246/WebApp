// 4 tabs onclick indication with background filling
var buls = document.querySelectorAll('.bul');
var ul = document.querySelector('.tabs > ul');
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
targeted(buls[0]);

