function secondLargest(arr) {
    //author: Courage Oghogho
    //decagon challenge
    let arrSorted=arr.sort((a,b)=>{return b-a;});
    return arrSorted[1];
  
}
module.exports = secondLargest

console.log(secondLargest([23,1,2,3,20,5,6,7,8,9]));