var names = ['Trevor','Kyle','Matt'];

/*names.forEach(function(name){
	console.log('foreach '+name);
});

names.forEach( (name) => {
	console.log('arrowFunc', name);
} );

names.forEach( (name) => console.log(name) );
*/
//returnMe = (name) => name + '!';
//console.log(returnMe('Trevor'));

/*var person = {
	name:'Trevor',
	greet: function(){
		names.forEach(function(name){
			console.log(this.name + ' says hi to '+name)
		});
	}
}*/

/*var person = {
	name:'Trevor',
	greet: function(){
		names.forEach((name)=>{
			console.log(this.name + ' says hi to '+name)
		});
	}
}

person.greet();*/

function sum (a, b){
	return a+b;
}

//addstatement
var addstatement = (a,b)=>{
	return a+b;
}

//addExpression
var sum = (a,b) => a+b;

console.log(addExpression(2,6));

console.log(addstatement(1,3));
console.log(addstatement(9,1));

