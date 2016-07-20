var add = function(x,y){
	return x + y;
}
var sub = function(x,y){
	return x - y;
}

var handle_data = function(func){
	var x = 5 ;
	var y = 6;
	return func(x,y);
}

console.log(handle_data(add));
console.log(handle_data(sub));