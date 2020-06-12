var Data;

function Cheek(Input_Data){
    Input_Data = Input_Data.toLowerCase();
    Input_Data = decodeURI(Input_Data);
    Input_Data.replace("+","");
    Data = Input_Data;
    console.log(Input_Data);
    if(bo("!wait") || bo("!wait")) alert('Input_Data : ' + Input_Data + '   Input_Data : ' + Input_Data);
    else if (bo("opent") || bo("업데이트리스트")) return ifg("UpdateList");
    else if (bo("entkr")) document.location.href='../other/findkorean.html';
    else if (bo("google") || bo("구글")) return ifg("Google");
    else if (bo("!help") || bo("!help")) return ifg("datalist");
    else if (bo("naver") || bo("네이버")) return ifg("Naver");
    else if (bo("snes")) return ifg("snes");
    else if (bo("daum") || bo("다움")) return ifg("Daum");
    else if (bo("nate") || bo("네이트")) return ifg("nate");
    else if (bo("catapy") || bo("캐터피")) return ifg("Catapy");
    else if (bo("sumdemw") || bo("sumdemwiki") || bo("sumdemw")  ||  bo("썸뎀위키")) return ifg("sumdemw");
    else if (bo("!chat") || bo("insert") || bo("wikidata") || bo("sendwikidata") || bo("!위키데이터제출") || bo("!위키데이터") || bo("!본문제출")) return ifg("chat");
    else if (bo("rocketclubp") || bo("로켓단")) return ifg("rocketclubp");
    else if (bo("nlabof") || bo("닌텐도라보(낚시편)") || bo("닌텐도라보버라이어버티키트1(낚시편)")) return ifg("nlabof");
    else if (bo("bbc") || bo("비비씨")) return ifg("bbc");
    else if (bo("html") || bo("에이치티엠엘")) return ifg("html");
    else if (bo("c") || bo("씨")) return ifg("c");
    else if (bo("a") || bo("에이")) return ifg("a");
    else{
        alert('Input_Data : ' + Input_Data + '   Input_Data : ' + Input_Data);
        return ifg('nowiki');
    }
}

function bo(a){
    if(a === Data) return true;
    else return false;
}

function ifg(a){
    if(a === "chat")return './wikiDB/other/chat.html';
    else if(a === "nowiki")return './wikiDB/error/nowiki.html';
    else return './wikiDB/wiki/' + a + '.html';
}

function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";
    params = params.split("&");

    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) { sval = temp[1]; }
    }
    return sval;
}
