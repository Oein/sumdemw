var Data;

function Cheek(Input_Data){
    Input_Data = Input_Data.toLowerCase();
    Input_Data = decodeURI(Input_Data);
    Input_Data.replace("+","");
    Data = Input_Data;
    console.log(Input_Data);
    if(bo("%21wait") || bo("!wait")) alert('Input_Data : ' + Input_Data + '   Input_Data : ' + Input_Data);
    else if (bo("opent")) return ifg("UpdateList");
    else if (bo("entkr")) document.location.href='../other/findkorean.html';
    else if (bo("google") || bo("%ea%b5%ac%ea%b8%80")) return ifg("Google");
    else if (bo("%21help") || bo("!help")) return ifg("datalist");
    else if (bo("naver") || bo("%eb%84%a4%ec%9d%b4%eb%b2%84")) return ifg("Naver");
    else if (bo("snes")) return ifg("snes");
    else if (bo("daum") || bo("%eb%8b%a4%ec%9d%8c")) return ifg("Daum");
    else if (bo("nate") || bo("%eb%84%a4%ec%9d%b4%ed%8a%b8")) return ifg("nate");
    else if (bo("catapy") || bo("%ec%ba%90%ed%84%b0%ed%94%bc")) return ifg("Catapy");
    else if (bo("sumdemw") || bo("sumdemwiki") || bo("sumdemw")  ||  bo("썸뎀위키")) return ifg("sumdemw");
    else if (bo("%21chat") || bo("insert") || bo("wikidata") || bo("sendwikidata") || bo("%21%eb%8b%a4%ec%9b%80") || bo("!위키데이터제출") || bo("!위키데이터") || bo("%21%eb%b3%b8%eb%ac%b8%ec%a0%9c%ec%b6%9c")) return ifg("chat");
    else if (bo("rocketclubp") || bo("로켓단")) return ifg("rocketclubp");
    else if (bo("nlabof") || bo("닌텐도라보(낚시편)") || bo("닌텐도라보버라이어버티키트1(낚시편)")) return ifg("nlabof");
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
