window.onload=function URLFormat() {
    var domain = url.split("/")[0];
    var answer;
    if(url == domain){
      answer = url + "/";
    } else {
      answer = url;
    }
    alert(answer);
}