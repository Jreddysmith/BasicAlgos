var arr =[0, -1, 2, -3, 4, -5, 6];

function removeNegatives(arr) {
	var numNegatives = 0;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] < 0) {
			numNegatives++;
		} else {
			arr[i - numNegatives] = arr[i];
		}
	}
	while (numNegatives--) {
		arr.pop();
	}
	return arr;
}


console.log(removeNegatives(arr));
