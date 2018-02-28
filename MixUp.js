function mixUp(str1,str2){
    var tmpstr1 = str1.substring(0, 2);
    var tmpstr2 = str2.substring(0, 2);

    var res1 = str1.replace(tmpstr1, tmpstr2);
    var res2 = str2.replace(tmpstr2, tmpstr1);
            
    console.log(res1 + ' ' + res2);
}

mixUp('mix', 'pod');
mixUp('dog', 'dinner');
