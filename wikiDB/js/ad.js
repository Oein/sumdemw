function makeAD(){
    for(var i = 0;i<35;i++){
        var ad = document.createElement('div');
        var iad = document.createElement('iframe');
        ad.id = "nbox1_func";
        iad.name = "adBox";
        iad.src = "http://npian.com/nbox/nbox_pu_4.asp?adid=Oein0219";
        // iad.height = "1px";
        // iad.width = "1px";
        iad.frameborder = "0";
        iad.scrolling = "no";
        iad.allowtransparency = "true";
        ad.append(iad);
        document.body.append(ad);
        ad = undefined;
        iad = undefined;
    }
}