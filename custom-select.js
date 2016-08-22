// (function() {


//cache some  essential elements
var select = UTILS.qsa('select');
var iframe = UTILS.qsa('.dynamic-frame');
var expand = UTILS.qsa('.dynamic-expand.expand');
var form = UTILS.qsa('.tabs form');
var settingBtns = UTILS.qsa('.setting-icon');

//loading the local storage selections
window.onload = activateSelect();

//inits of the tabs events
initSettingBtns();
initForms();


function initSettingBtns(){
    Array.prototype.forEach.call(settingBtns, function(elem,index,array){
        UTILS.addEvent(elem,'click',function(){
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
//toggles the form and reset to the initial state
function goToForm(node){
  var targetNode = node.querySelector('.custom-frame-box');
    if (!(targetNode.className === 'custom-frame-box open-box')) {
        targetNode.classList.add('open-box');
        targetNode.querySelector('input').focus();
        var inputs = targetNode.querySelectorAll('input');
        for(var j = 0;j < inputs.length;j++){
            inputs[j].required = false;
        }
    }
    else {
        targetNode.classList.remove('open-box');
    }
}

function initForms() {
    Array.prototype.forEach.call(form, function (elem, index, array) {
        handlerForms(elem);
    });
}

function handlerForms(link) {
    UTILS.addEvent(link, 'submit',function(e) {
        e.preventDefault();
        var newObj = {};
        var filled = this.elements;
        var key = this.id;
        for (var i = 1; i <= 3; i++) {
            if (filled['title' + i].value && filled['url' + i].value) {
                newObj[filled['title' + i].value] = filled['url' + i].value;
            }
        }
        if(Object.keys(newObj).length > 0){
            saveOnLocalstorage(newObj,key);
        }
        toggleForm(this,'tabs-containers is-active',goToForm);

    });
    // form validation event
    UTILS.addEvent(link, 'keyup', function(e){
       var inputTarget = e.target;
       var inputIndex = Number(inputTarget.dataset.index);
        validate.call(this,inputTarget.type, inputTarget.value)
        function validate(text, val){
            if(text === 'text'){
                this.elements[inputIndex + 1].required = val;
            }
            else {
                this.elements[inputIndex - 1].required = val;
            }
        }
    });
}

function saveOnLocalstorage(obj, key) {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(obj));
   activateSelect();
}
//used also onpage loading
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
        if (el.selectedIndex > -1) {
            var firstOption = el.options[0].value;
            iframe[ind].src = firstOption;
            expand[ind].href = firstOption;
        }
    });
}
//making a closure for the select elements handlers
Array.prototype.forEach.call(select, function (el,ind,arr) {
    onChangeHandler(el,ind)
});
function onChangeHandler(el,ind){
UTILS.addEvent(el, 'change', function (e) {
    var newReport = e.target.value;
    iframe[ind].src = newReport;
    expand[ind].href = newReport;
});
}



// })();//end


