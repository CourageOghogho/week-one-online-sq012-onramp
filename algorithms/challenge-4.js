
//author: Courage
function sumTwoSmallestNums(arr) {
    let sum=0;
    let positiveNumArray=arr.filter(function(n) { return n>=1; });
    positiveNumArray=positiveNumArray.sort((a,b)=>{ return a-b; });
    sum=positiveNumArray[0]+positiveNumArray[1];
    return sum;

    
 }
  module.exports =sumTwoSmallestNums

  console.log(sumTwoSmallestNums([0,-2,-1,-20,2, 3,1,23]));