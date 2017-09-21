<template>
	<div id="b1">
		<article class="markdown-body">
			<div id="twoBtn">
				<router-link to='/home/b4' class='btn1'>«边框内圆角</router-link>	
				<router-link to='/home/b6' class='btn2'>复杂的背景图案»</router-link>	
			</div>
			<h1 id="demo-name">5.条纹背景</h1>
			<div class="demo-wrap">
				<div id="demo1" class="demo">
					<div id="div1" class="demo-d"></div>
				</div>
				<div class="demo-text">
					background: linear-gradient(orange,blue);
				</div>
			</div>
			<div class="demo-wrap">
				<div id="demo2" class="demo">
					<div id="div2" class="demo-d"></div>
				</div>
				<div class="demo-text">
					background: linear-gradient(orange 20%,blue 80%);
				</div>
			</div>
			<div class="demo-wrap">
				<div id="demo3" class="demo">
					<div id="div3" class="demo-d"></div>
				</div>
				<div class="demo-text">
					background: linear-gradient(orange 50%,blue 50%);
				</div>
			</div>
			<div class="demo-wrap">
				<div id="demo4" class="demo">
					<div id="div4" class="demo-d"></div>
				</div>
				<div class="demo-text">
					background: linear-gradient(orange 50%,blue 50%);<br>
					background-size: 100% 20px;
				</div>
			</div>
			<div class="demo-wrap">
				<div id="demo5" class="demo">
					<div id="div5" class="demo-d"></div>
				</div>
				<div class="demo-text">
					background: linear-gradient(orange 33.3%,blue 0,blue 66.6%,green 0);<br>
					background-size: 100% 35px;
				</div>
			</div>
			<div class="demo-wrap">
				<div id="demo6" class="demo">
					<div id="div6" class="demo-d"></div>
				</div>
				<div class="demo-text">
					background: linear-gradient(to right, orange 50%, blue 0);<br>
					background-size: 30px 100%;
				</div>
			</div>
			<div class="demo-wrap">
				<div id="demo7" class="demo">
					<div id="div7" class="demo-d"></div>
				</div>
				<div class="demo-text">
					background: linear-gradient(45deg, orange 50%, blue 0);<br>
					background-size: 30px 30px;
				</div>
			</div>
			<div class="demo-wrap">
				<div id="demo8" class="demo">
					<div id="div8" class="demo-d"></div>
				</div>
				<div class="demo-text">
					background: linear-gradient(45deg, orange 25%, blue 0, blue 50%, orange 0, orange 75%, blue 0);<br>
					background-size: 42px 42px;
				</div>
			</div>
			<div class="demo-wrap">
				<div id="demo9" class="demo">
					<div id="div9" class="demo-d"></div>
				</div>
				<div class="demo-text">
					background: repeating-linear-gradient(45deg,orange,blue 30px);
				</div>
			</div>
			<ul>
				知识点:
				<li>linear-gradient</li>
				<li>repeating-linear-gradient</li>
				<li>background-size</li>
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
		background: linear-gradient(orange,blue);
	}

	#div2 {
		background: linear-gradient(orange 20%,blue 80%);
	}

	#div3 {
		background: linear-gradient(orange 50%,blue 50%);
	}

	#div4 {
		background: linear-gradient(orange 50%,blue 50%);
		background-size: 100% 20px;
	}

	#div5 {
		background: linear-gradient(orange 33.3%,blue 0,blue 66.6%,green 0);
		background-size: 100% 35px;
	}

	#div6 {
		background: linear-gradient(to right, orange 50%, blue 0);
		background-size: 30px 100%;
	}

	#div7 {
		background: linear-gradient(45deg, orange 50%, blue 0);
		background-size: 30px 30px;
	}

	#div8 {
		background: linear-gradient(45deg, orange 25%, blue 0, blue 50%, orange 0, orange 75%, blue 0);
		background-size: 42px 42px;
	}

	#div9 {
		background: repeating-linear-gradient(45deg,orange,blue 30px);
	}
</style>