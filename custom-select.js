// (function() {

// select function

var select = document.querySelectorAll('select');
var iframe = document.querySelectorAll('.dynamic-frame');
var expand = document.querySelectorAll('.dynamic-expand.expand');
var form = document.querySelectorAll('.tabs form');
var settingBtns = document.querySelectorAll('.setting-icon');
window.onload = activateSelect();

function initSettingBtns(){
    Array.prototype.forEach.call(settingBtns, function(elem,index,array){
        elem.addEventListener('click',function(){
            toggleForm(this,'tabs-containers is-active',goToForm);
        });
    });
}
function toggleForm(node,parentClass,cb){
    if(node.className === parentClass ){
        cb(node);
        return;
    }
    node = node.parentNode;
    toggleForm(node,parentClass,cb);
}
function goToForm(node){
  var targetNode = node.querySelector('.custom-frame-box');
    if (!(targetNode.className === 'custom-frame-box open-box')) {
        targetNode.classList.add('open-box');
    }
    else {
        targetNode.classList.remove('open-box');
    }
}
initSettingBtns();


function initForms() {
    Array.prototype.forEach.call(form, function (elem, index, array) {
        handlerForms(elem);
    });
}

function handlerForms(link) {
    link.addEventListener('submit',function(e) {
        e.preventDefault();
        var newObj = {};
        var filled = this.elements;
        var key = this.id;
        for (var i = 1; i <= 3; i++) {
            if (filled['title' + i].value && filled['url' + i].value) {
                newObj[filled['title' + i].value] = filled['url' + i].value;
            }
        }
        saveOnLocalstorage(newObj,key);
        toggleForm(this,'custom-frame-box',goToForm);
    });
}
initForms();


function saveOnLocalstorage(obj, key) {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(obj));
   activateSelect();
}
function activateSelect() {
    Array.prototype.forEach.call(select, function (el,ind,arr) {
        el.length = 0;
        var newList = JSON.parse(localStorage.getItem(el.name));
        for (var key in newList) {
            var opt = document.createElement("option");
            opt.value = newList[key];
            opt.text = key;
            el.add(opt, null);
        }
    });
    displayIframe()
}
function displayIframe() {
    Array.prototype.forEach.call(select, function (el,ind,arr) {
        var firstOption = el.options[0].value;
        if (el.selectedIndex > -1) {
            iframe[ind].src = firstOption;
            expand[ind].href = firstOption;
        }
    });
}

Array.prototype.forEach.call(select, function (el,ind,arr) {
    onChangeHandler(el,ind)
});
function onChangeHandler(el,ind){
el.addEventListener('change', function (e) {
    var newReport = e.target.value;
    iframe[ind].src = newReport;
    expand[ind].href = newReport;
});
}


// })();//end


