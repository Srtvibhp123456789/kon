function ch_pallindrom(str_entry){
    var cstr=str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var ccount=0;

    if(cstr===""){
        console.log("nothing found!");
        return false;
    }
    if((cstr.length)%2 ===0){
        ccount=(cstr.length)/2;
    }
    else{
        if(cstr.length===1){
            console.log("entry is paalindrom");
            return true;
        }
        else{
            ccount=(cstr.length-1)/2;
        }
    }
    for(var x=0;x<ccount;x++){
        if(cstr[x] != cstr.slice(-1-x)[0]){
            console.log("entry is not pallindrom");
            return false;
        }
    }
    console.log("the entry is a pallindrom");
    return true;
}
ch_pallindrom("madam");
ch_pallindrom("nursesrun");
ch_pallindrom("fox");