function notBad(str){
    var indexNot = str.indexOf("not");
    var indexBad = str.indexOf("bad");

    if (indexNot > 0 && indexBad > 0) {
        if (indexBad > indexNot) {
            tmpStr1 = str.substring(0,indexNot);
            tmpStr2 = str.substring(indexBad + 3, ); 
            
            res = (tmpStr1.concat('good')).concat(tmpStr2);
        } else {
            res = str;
        }    
    }else{
        res = str;
    }
        
    console.log(res);
}

notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');
