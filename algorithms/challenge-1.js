function secondLargest(arr) {
    let sortedArr=arr.sort(function (a, b) {return b-a;})
    return sortedArr[1];
}
module.exports = secondLargest
   



