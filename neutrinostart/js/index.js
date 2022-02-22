const searchURL = {
    "baidu": "https://www.baidu.com/s?wd=",
    "bing": "https://www.bing.com/search?q=",
    "google": "https://www.google.com/search?q=",
}

var searchEng;
var hiText;
var hiAuthor;

function getCookie(name) {
    var arr;
    var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    }
}

function setCookie(name, value) {
    var date = new Date();
    date.setTime(date.getTime() + (10 * 365 * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + escape(value) + ";expires=" + date.toGMTString();
}

function updTime() {
    var curTime = new Date();
    document.querySelector("#clock").innerText = ("0" + curTime.getHours()).slice(-2) + ":" + ("0" + curTime.getMinutes()).slice(-2);
}

function searchWeb() {
    var value = document.querySelector("#search > input").value;
    if (value.split(" ").join("") != "" && value != null && value != undefined) {
        if (/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/.test(value) == true) {
            window.open(value, "_blank");
        }
        window.open(encodeURI(searchURL[searchEng] + value), "_blank");
    }
    document.querySelector("#search > input").value = "";
}

function searchReload() {
    var engines = document.querySelectorAll(".engine-item");
    for (var i = 0; i < engines.length; i++) {
        engines[i].onclick = (event) => {
            searchEng = event.target.dataset.id;
            setCookie("search_engine", searchEng);
            searchReload();
        }
        if (engines[i].dataset.id == searchEng) {
            engines[i].classList.add("engine-item-selected");
        } else {
            if (engines[i].classList.contains("engine-item-selected") == true) {
                engines[i].classList.remove("engine-item-selected");
            }
        }
    }
}

window.addEventListener("load", () => {
    updTime();
    setInterval(updTime, 1000);
    searchEng = getCookie("search_engine");
    if (searchEng == undefined) {
        setCookie("search_engine", "bing");
        searchEng = "bing";
    }
    searchReload();
    document.querySelector(".search-box").onfocus = () => {
        document.querySelector("#blurbox").style.opacity = "1";
        document.querySelector("#engine").style.visibility = "visible";
        document.querySelector("#clock").style.visibility = "hidden";
        setTimeout(() => {
            document.querySelector("#engine").style.opacity = "1";
        }, 0);
        document.querySelector(".search-box").classList.add("search-box-focus");
    };
    document.querySelector("#blurbox").onclick = () => {
        document.querySelector("#blurbox").style.opacity = "0";
        document.querySelector("#engine").style.opacity = "0";
        setTimeout(() => {
            document.querySelector("#engine").style.visibility = "hidden";
            document.querySelector("#clock").style.visibility = "visible";
        }, 400);
        document.querySelector(".search-box").classList.remove("search-box-focus");
    };
    document.querySelector("#search > div").onclick = () => {
        searchWeb();
    };
    document.querySelector(".search-box").onkeydown = (key) => {
        if (key.key == "Enter") {
            searchWeb();
        }
    }
    const max = 2;
    const min = 1;
    const img = Math.floor(Math.random() * (max - min + 1)) + min;
    document.querySelector("#bgbox").style.backgroundImage = "url(./img/background" + img + ".jpg)";
});
