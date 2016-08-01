
(function(){
    var buls = document.querySelectorAll('.bul');
    var tabsContent = document.querySelectorAll('.tabs-containers');
    var activeIndex = 0;
    function init() {
        Array.prototype.forEach.call(buls, function(elem,index,array) {
            handler(elem, index);
        });

        }

        function handler(link,index){
            link.addEventListener('click',function(e) {
              e.preventDefault();
                goToTabs(index);
            });
        }
        function goToTabs(index) {
            if(index !== activeIndex){
                buls[activeIndex].classList.remove('activated');
                buls[index].classList.add('activated');
                tabsContent[activeIndex].classList.remove('is-active');
                tabsContent[index].classList.add('is-active');
                location = '#' + tabsContent[index].id;
                activeIndex = index;
            }
        }
        

    init();
})();


// 4 tabs onclick indication with background filling
//     var buls = document.querySelectorAll('.bul');
//     var ul = document.querySelector('.tabs > ul');
//     var tabsContent = document.querySelectorAll('.tabs > div');
//
//     window.onload = targeted(buls[0]), openTab();
//
//     ul.addEventListener("click", function (event) {
//         event.preventDefault()
//         if (event.target.className === 'bul' || event.target.parentNode.className === 'bul') {
//             for (var i = 0; i < buls.length; i++) {
//                 buls[i].classList.remove('activated');
//             }
//             if (event.target.className === "bul") {
//                 targeted(event.target);
//             }
//             else if (event.target.tagName === 'I') {
//                 targeted(event.target.parentNode)
//             }
//         }
//     }, true);
//
//     function targeted(tab) {
//         tab.classList.add('activated');
//         location = tab.href;
//     }
//     window.addEventListener("hashchange", openTab, false);
//     function openTab() {
//         var newId = location.hash.slice(1);
//         for (var i = 0; i < tabsContent.length; i++) {
//             tabsContent[i].style.display = 'none';
//             if (tabsContent[i].id === newId) {
//                 tabsContent[i].style.display = 'flex';
//             }
//         }
//     }
//