var arr = [1, 3, 5, 7];
var x = 10;
var y = 2;

arr.push(0);

for(var i = arr.length - 1; i > y; i--) {
	arr[i] = arr[i-1];
}
arr[y] = x;
 
console.log(arr);
