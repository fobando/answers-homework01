function fixStart(str){
    var tmpstr = str.substring(0, 1);
    var res1 = str.substring(1, ).replace(new RegExp(tmpstr, 'g'), '*');
    var res2 = tmpstr.concat(res1);
    
    console.log(res2);
}

fixStart('babble');
