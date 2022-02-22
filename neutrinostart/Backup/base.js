                    
function IsSearch(){
var b = document.querySelector('#Check1').is(':checked') ? "1" : "0";

               
                    if(b="1"){
                      window.open("http://www.baidu.com/s?wd=" + value, "_blank");
                    }
                    else{
                         window.open(value, "_blank");
                   }
}