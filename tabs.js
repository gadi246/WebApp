
//inspired by www.callmenick.com
(function(){
    var buls = UTILS.qsa('.bul');
    var tabsContent = UTILS.qsa('.tabs-containers');
    var activeIndex = 0;
    function init() {
        Array.prototype.forEach.call(buls, function(elem,index,array) {
            handler(elem, index);
        });

        }

        function handler(link,index){
           UTILS.addEvent(link,'click',function(e) {
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
                location = '#' + tabsContent[index].id;//some unfunctional line of code
                activeIndex = index;
            }
        }
        

    init();
})();

