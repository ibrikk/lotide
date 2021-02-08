const middle = (arr) => {
  let middleArr = [];
  if (arr.length < 3) {
    return middleArr;
  } else {
    let middleIndex = Math.ceil(arr.length / 2) - 1 ;
    if (arr.length % 2 !== 0) {
      middleArr.push(arr[middleIndex]);
    } else {
      middleArr.push(arr[middleIndex]);
      middleArr.push(arr[++middleIndex]);
    }
    return middleArr;
  }
}


module.exports = middle;