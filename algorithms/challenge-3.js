function sumMix(arr) {
    //author: Courage
    let sum=0;
    let properArray=arr.map((elem)=>{return parseInt(elem, 10);});
    properArray.map((elem)=>{return sum+=elem;});
    return sum;


   
 }

  module.exports = sumMix

  console.log(sumMix([23,1,5,"1","6"]));