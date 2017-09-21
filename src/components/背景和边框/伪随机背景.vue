<template>
	<div id="b1">
		<article class="markdown-body">
			<div id="twoBtn">
				<router-link to='/home/b6' class='btn1'>«复杂的图案背景</router-link>	
				<router-link to='/home/b8' class='btn2'>连续的图像边框»</router-link>	
			</div>
			<h1 id="demo-name">7.伪随机背景</h1>
			<div class="demo-wrap">
				<div id="demo1" class="demo">
					<div id="div1" class="demo-d"></div>
				</div>
				<div class="demo-text">
					
				</div>
			</div>
			<div class="demo-wrap">
				<div id="demo2" class="demo">
					<div id="div2" class="demo-d"></div>
				</div>
				<div class="demo-text">
					
				</div>
			</div>
			<div class="demo-wrap">
				<div id="demo3" class="demo">
					<div id="div3" class="demo-d"></div>
				</div>
				<div class="demo-text">
					
				</div>
			</div>
			<ul>
				知识点:
				
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

</style>