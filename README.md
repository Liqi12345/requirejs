# require.js

### **缘来**

1.多个js文件如果互相依赖，需要把依赖性最大的文件最后加载

2.js文件在加载的时候会造成阻塞，阻止后面代码运行

### **引入**

```html
<script src="js/require.js" defer async="true"></script> //异步加载，ie只支持defer属性
```

### **加载自己的文件**

```html
<script src="js/require.js" data-main="a"></script> data-main:指定网页程序的主模块
```

### 在主模块配置要加载的文件

```js
#如果不写路径，默认与主文件在同一目录
require.config({
	paths:{
		"a":"a",
		"b":"b"
	}
})
#如果和入口文件不在同一目录，两种解决方案
	#在paths里写上文件路径
    #在baseUrl配置基目录
require.config({
    baseUrl:'js/',
    paths:{
        "a":"a",
		"b":"b"
    }
})
```

#### 如果主模块（入口js）依赖其他模块，要用AMD定义的require（）函数

```js
//等a和b模块加载完成（异步运行，不会影响之后的加载）
//执行回调（加载的模块会以参数的形式传入回调），
require(["b","c"],function(b,c){
	console.log(b.add1(3,5) + c.reduce(1))
})
```

#### require采用AMD规范，所以必须用defined（）函数定义

```js
//b.js
define(function(){
  var add = function(x,y){
    return x+y
  }
  return{
    add1:add
  }
})
```

#### 不依赖其他模块的内容，可以写在defined函数外

```js
//c.js
define(function(){
  return{
    one:1,
    two:2
  }
})
function test(z){
  return test(z)
}
console.log(test('I am test'))
```

#### 如果依赖的模块又依赖其他模块。那么define（）的第一个参数，就是依赖的模块

```js
// c.js
define(['d'],function(d){
 function reduce(z){
    return d.num - z
  }
  return{
    reduce
  }
})
```

#### d.js

```js
define(function(){
	return{
		num:0
	}
})
```

## 引入不符合AMD规范的文件

```js
# deps:[] 依赖的模块
# exports 暴露出来的变量
require.config({
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

require(["b","c",'swiper','jquery','backbone'],function(b,c,swp,$,backbone){
 	console.log(backbone)
}) 
```









