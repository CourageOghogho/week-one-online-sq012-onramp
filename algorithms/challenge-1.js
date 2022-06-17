function secondLargest(arr) {
    //author: Courage Oghogho
    //decagon challenge
    let arrSorted=arr.sort((a,b)=>{return b-a;});
    return arrSorted[1];
  
}
module.exports = secondLargest