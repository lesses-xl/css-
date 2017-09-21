<template>
	<div id="b1">
		<article class="markdown-body">
			<div id="twoBtn">
				<router-link to='/home/b1' class='btn1'>«半透明边框</router-link>	
				<router-link to='/home/b3' class='btn2'>灵活的背景定位»</router-link>	
			</div>
			<h1 id="demo-name">2.多重边框</h1>
			<div class="demo-wrap">
				<div id="demo1" class="demo">
					<div id="div1" class="demo-d"></div>
				</div>
				<div class="demo-text">
					background: orange;<br>
					box-shadow: 0 0 0 10px blue;
				</div>
			</div>
			<div class="demo-wrap">
				<div id="demo2" class="demo">
					<div id="div2" class="demo-d"></div>
				</div>
				<div class="demo-text">
					background: orange;<br>
					box-shadow: 0 0 0 10px blue,<br>
								0 0 0 15px pink,<br>
								0 0 5px 20px green;	
				</div>
			</div>
			<div class="demo-wrap">
				<div id="demo3" class="demo">
					<div id="div3" class="demo-d"></div>
				</div>
				<div class="demo-text">
					outline: 5px dotted deeppink;<br>
					border-radius: 5px;<br>
					/*outline得到的边框不会得到圆角的形状*/
				</div>
			</div>
			<ul>
				知识点:
				<li>box-shadow</li>
				<li>outline</li>
			</ul>
		</article>
	</div>
</template>
<style type="text/css" scoped>
	.demo-wrap {
		width: 100%;
		height: 200px;
		margin-bottom: 50px;
	}

	.demo {
		width: 320px;
		height: 180px;
		float: left;
		border: 1px solid gray;
		margin-left: 10px;
	}

	.demo-text {
		width: 310px;
		height: 180px;
		border: 1px solid gray;
		float: right;
		box-sizing: border-box;
		margin-right: 10px;
		padding: 5px 10px;
		font-size: 15px;
	}

	.demo-text p {
		margin-bottom: 1px;
	}

	.demo-d {
		width: 200px;
		height: 100px;
		background: orange;
		margin-top: 40px;
		margin-left: 60px;
		box-sizing: border-box;
	}

	#div1 {
		box-shadow: 0 0 0 10px blue;
	}

	#div2 {
		box-shadow: 0 0 0 10px blue,
					0 0 0 15px pink,
					0 0 5px 20px green;	
	}

	#div3 {
		outline: 5px dotted deeppink;
		border-radius: 5px;
	}
</style>