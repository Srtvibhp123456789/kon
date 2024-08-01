function sec_gr_lo(arr){
    arr.sort(function(a,b){
        return a-b;
    });
    let secondLowest=arr[1];
    let reversedArr=arr.reverse();
    let secondGreatest=reversedArr[1];

    return [secondLowest,secondGreatest];
}
console.log(sec_gr_lo([1,2,3,4,5,6,7,8,9]));