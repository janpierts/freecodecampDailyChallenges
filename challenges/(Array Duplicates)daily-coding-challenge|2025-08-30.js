function findDuplicates(arr) {
  var data = [];

  for (var i = 0; i < arr.length; i++) {
    var a = arr.slice(i + 1, arr.length);
    var b = Number(arr.slice(i, i + 1));
    if (a.includes(b)) {
      if (!data.includes(b)) {
        data.push(b);
      }
    }
  }
  data.sort(function(x, y) {
    return x - y;
  });

  return data;
}
console.log(findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]));
