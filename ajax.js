//UTILS.qs('.notifications').innerHTML = '<span>'+ new Date()+'<span>';
var notif = UTILS.qs('.notifications')
var opt = {
    done: function(para){
         notif.innerHTML = '<span>' + para['notifications'] + '</span>';
    },
    fail: function (para) {
        return console.log(para);
    }
};
 UTILS.ajax('not.json',opt);

