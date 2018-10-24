define(function(){
	var add = function(x,y){
		return x+y
	}
	var q = function(z){
		return z
	}
	console.log(q(999))
	return{
		add1:add
	}
})