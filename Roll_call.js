var namelist = [];
var name;
for (var i = 0; i < 200; i++){
    name = readline();
    if(name){
        namelist.push(name.split(" "));
    }else{break;}
}
namelist.sort();
var fixed = false;
for(i = 0; i < namelist.length; i++ ){
    if(i != (namelist.length - 1)){
        
        if(namelist[i][0] == namelist[i+1][0]){
            namelist[i][0] = namelist[i][0] + " " + namelist[i][1];
            fixed = true;
        }else{
            if(fixed){
                namelist[i][0] = namelist[i][0] + " " + namelist[i][1];
            }
            fixed = false;
        }
    }else{
        if(fixed){
            namelist[i][0] = namelist[i][0] + " " + namelist[i][1];
        }
    }
}
namelist.sort( function( a , b){
    if(a[1] > b[1]) return 1;
    if(a[1] < b[1]) return -1;
    return 0;
});
for(i = 0; i < namelist.length; i++ ){print(namelist[i][0]);}
