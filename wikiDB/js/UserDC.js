var Data;

function Cheek(Input_Data){
    Input_Data = Input_Data.toLowerCase();
    Data = Input_Data;
    console.log(Input_Data);
    if(bo("%21wait") || bo("!wait")) alert('Input_Dataa : ' + Input_Dataa + '   Input_Data : ' + Input_Data);
    else if (bo("opent")) ifg("UpdateList");
    else if (bo("entkr")) document.location.href='./findkorean.html';
    else if (bo("google") || bo("%ea%b5%ac%ea%b8%80")) ifg("Google");
    else if (bo("%21help") || bo("!help")) ifg("datalist");
    else if (bo("naver") || bo("%eb%84%a4%ec%9d%b4%eb%b2%84")) ifg("Naver");
    else if (bo("snes")) ifg("snes");
    else if (bo("daum") || bo("%eb%8b%a4%ec%9d%8c" , Input_Data)) ifg("Daum");
    else if (bo("nate") || bo("%eb%84%a4%ec%9d%b4%ed%8a%b8", Input_Data)) ifg("nate");
    else if (bo("catapy") || bo("%ec%ba%90%ed%84%b0%ed%94%bc", Input_Data)) ifg("Catapy");
    else if (bo("sumdemw") || bo("sumdemwiki") || bo("sumdem+w") || bo("sumdem+wiki") ||  bo("%ec%8d%b8%eb%8e%80%ec%9c%84%ed%82%a4") || bo("%ec%8d%b8%eb%8e%80+%ec%9c%84%ed%82%a4")) ifg("sumdemw");
    else if (bo("%21chat") || bo("insert") || bo("wikidata") || bo("sendwikidata") || bo("%21%eb%8b%a4%ec%9b%80") || bo("%21%ec%9c%84%ed%82%a4%eb%8d%b0%ec%9d%b4%ed%84%b0%ec%a0%9c%ec%b6%9c") || bo("%21%ec%9c%84%ed%82%a4%eb%8d%b0%ec%9d%b4%ed%84%b0") || bo("%21%eb%b3%b8%eb%ac%b8%ec%a0%9c%ec%b6%9c")) ifg("chat");
    else{
        alert('Input_Data : ' + Input_Data + '   Input_Data : ' + Input_Data);
        ifg('nowiki');
    }
}

function bo(a){
    if(a === Data) return true;
    else return false;
}

function ifg(a){
    if(a === "chat")document.location.href='./chat.html';
    else if(a === "nowiki")document.location.href='./error/nowiki.html';
    else document.location.href='../wiki/' + a + '.html';
}
