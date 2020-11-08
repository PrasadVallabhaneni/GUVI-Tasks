var chunk = function (data, k) {
    var result = [];
    var arr = [];
    for (var i = k; i <= data.length; i = i + +k) {
        var l = i - k;
        for (var j = l; j < l + +k; j++) {
            arr.push(data[j]);
        }
        result.push(arr);
        arr = [];
    }
    var len = result.length;
    for (var m = len * k; m < data.length; m++) {
        arr.push(data[m]);
    }
    if (arr.length > 0) {
        result.push(arr);
    }
    console.log(result);
};
var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log("chunk function");
chunk(data, 3);
//reduce
var reduce = function (arr, fn) {
    var result = arr[0];
    for (var i = 1; i < arr.length; i++) {
        result = eval(result + fn + arr[i]);
    }
    return result;
};
console.log("Reduce function");
console.log(reduce([1, 2, 3, 4, 5], '+'));
//filter 
var filter = function (arr, length) {
    var result = [];
    arr.forEach(function (element) {
        if (element.length > length)
            result.push(element);
    });
    return result;
};
console.log("Filter Function");
console.log(filter(['prasad', 'john', 'bruce', 'carry'], 4));
//find 
var find = function (arr, ele) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            return true;
        }
        else {
            return false;
        }
    }
};
console.log("Find function");
console.log(find([1, 2, 6, 3, 9], 5));
//sum
var sum = function (arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
};
console.log("Sum function");
console.log(sum([1, 2, 3, 4, 5]));
