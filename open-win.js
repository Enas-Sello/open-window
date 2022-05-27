//---------task5 open win-------\\

var newWindow;
function openwin (){
    newWindow = window.open("opend win.html","","width=250, height=250")
var moveWindo = newWindow.setInterval(function(){newWindow.moveBy(20,20)},1500);

var scroll = newWindow.setInterval(
    function(){ newWindow.scrollBy(0,150)
    }, 3000 )
    
};

function closewin(){
    newWindow.close()
    }

    
       //----type writer---\\
    var text = " type writer Effect  "
    i = 0;
    var setInterval = setInterval(function(){
document.getElementById("type").textContent +=text[i];
i++
if (i>text.length-1){
clearInterval(setInterval)}},100);
