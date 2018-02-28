function verbing(str){
    if (str.length > 2) {
        if (str.endsWith("ing") == true) {
            res = str.concat('ly');
        } else {
            res = str.concat('ing');
        }
    } else {
        res = str;
    }
    
    console.log(res);
}

verbing('swim');
verbing('swiming');
verbing('go');
