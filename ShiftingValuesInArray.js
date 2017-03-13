var x = [2, 5, 2, -1, 22];

for (var i = 0; i  < x.length-1; i++) {
	x[i] = x[i + 1];
}
x[x.length-1] = 0;

console.log(x);
