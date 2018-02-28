function drEvil(number){
    if (number == 1000000) {
        var str = number + ' dollars (pinky)';
    } else {        
        var str = number + ' dollars';
    }
    
    console.log(str);
}

drEvil(10);
drEvil(1000000);
