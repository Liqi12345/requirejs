/////////////////////demo1/////////////////
require.config({
	baseUrl:'js/',
	paths:{
		"b":"b",
		"c":"c"
		
	}
})

require(["b","c"],function(b,c){
 	console.log(b.add1(3,5) + c.reduce(1))
}) 

////////////demo2/////////////////

requirejs.config({
	baseUrl:'js/',
	paths:{
		"b":"b",
		"c":"c",
		'swiper':'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/js/swiper',
		'jquery':'jquery.min',
		'underscore':'underscore',
		'backbone':'http://backbonejs.org/backbone'
		
	},
	shim:{ //引入不符合AMD规范的文件
		'underscore':{
　　　　　　　　exports: '_'
　　　　　　},

　　　　　　'backbone': {
　　　　　　　　deps: ['underscore', 'jquery'],//依赖的模块
　　　　　　　　exports: 'Backbone' //暴露的变量
　　　　　　}
	}
})

requirejs(["b","c",'swiper','jquery','backbone'],function(b,c,swp,$,backbone){
 	console.log(backbone)
}) 


