//write a javascri[pt function that check whether a number is perfect or not?
function perfect(n){
    var temp=0;

    for(var i=1;i<=n/2;i++){//
        if(n%i===0){//7
            temp+=i;//2,
        }
    }
    if(temp === n && temp !== 0){
        console.log("it is perfect number");
    }
    else{
        console.log("its not perfect number");
    }
}
perfect(28)