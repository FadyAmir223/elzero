console.group('group 1');
	console.log('1');
	console.log('2');
	console.group('child group');
		console.log('1');
		console.log('2');
		console.group('grand child group');
			console.log('1');
			console.log('2');
		console.groupEnd();
	console.groupEnd();
console.groupEnd();
console.group('group 2');
	console.log('1');
	console.log('2');
console.groupEnd();
