function filterArray(arr) {
    //author: Courage
    // returns array of only integers
    return numOnlyArr=arr.filter((item)=>{return(typeof item === "number")});
}

module.exports = filterArray

console.log(filterArray([1,"8","234",22,3,4,9,10]));