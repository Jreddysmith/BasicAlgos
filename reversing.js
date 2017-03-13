var x = [-3, 5, 1, 7, 33 , 2];

for (var i = 0; i < Math.floor(x.length/2); i++) {
	var temp = x[i];
	x[i] = x[x.length-1-i];
	x[x.length-1-i] = temp;
}

console.log(x);
