function goTo(url){
    location.href=url;
    reload();
}

var version = "0.12.1";

function linuxDown(){
    goTo("https://github.com/jlppc/OpMon/releases/download/alpha-v" + version + "/OpMon_" + version  + "-bin.deb");
}