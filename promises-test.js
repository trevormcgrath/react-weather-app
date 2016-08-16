function addPromise(a, b){
	return new Promise(function(resolve, reject){
		if (typeof a === 'number' && typeof b === 'number'){
			resolve(a + b);
		} else {
			reject('One of the parameters was not a number.');
		}
	});
};


addPromise(2,3).then(function(sum){
	console.log('success:', sum);
},function(error){
	console.log('error:', error);
});


addPromise('test',3).then(function(sum){
	console.log('success:', sum);
},function(error){
	console.log('error:', error);
});