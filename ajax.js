//UTILS.qs('.notifications').innerHTML = '<span>'+ new Date()+'<span>';
var notif = UTILS.qs('.notifications');
var notifDate = new Date().toDateString()
var opt = {
    done: function(para){
        if(!para){
            notif.innerHTML = '<span>' + 'Loading...' + '</span>'
        }
         notif.innerHTML = '<span>' + para['notifications'] + '</span>' + '<span>' + notifDate + '</span>';
    },
    fail: function (para) {
        return console.log(para);
    }
};
 UTILS.ajax('not.json',opt);


