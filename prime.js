//chreck a number is prime or not 
function test_prime(n){
    if(n==1){
        return false;
    }
    else if(n==2){
        return true;
    }
    else{
        for(var x=2;x<n;x++){
            if(n%x===0){
                //return false;
                console.log(x);
            }
        }
        return true;
    }
}
//var name= readInt({$test_prime});
console.log(test_prime(20));