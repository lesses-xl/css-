<template>
	<div id="b1">
		<article class="markdown-body">
			<div id="twoBtn">
				<router-link to='/home' class='btn1'>«主页</router-link>	
				<router-link to='/home/b2' class='btn2'>多重边框»</router-link>	
			</div>
			<h1 id="demo-name">1.半透明边框</h1>
			<div class="demo-wrap">
				<div id="demo1">
					<div id="div1" class="demo-d"></div>
				</div>
				<div class="demo-text">
					<p>background: lightblue;</p>
					<p>border: 10px solid rgba(255,255,255,0.6);</p>
				</div>
			</div>
			<div class="demo-wrap">
				<div id="demo2">
					<div id="div2" class="demo-d"></div>
				</div>
				<div class="demo-text">
					<p>background: lightblue;</p>
					<p>border: 10px solid rgba(255,255,255,0.6);</p>
					<p>background-clip: padding-box;</p>
				</div>
			</div>
			<ul>
				知识点:
				<li>background-clip用法</li>
			</ul>
		</article>
	</div>
</template>

<style type="text/css" scoped>
	#demo1 {
		width: 320px;
		height: 180px;
		background: url('../../assets/b1.jpg') no-repeat;
		background-size: cover;
		margin-left: 10px;
		position: relative;
		float: left;
	}

	#demo2 {
		width: 320px;
		height: 180px;
		background: url('../../assets/b1.jpg') no-repeat;
		background-size: cover;
		margin-left: 10px;
		position: relative;
		float: left;
	}

	#div1 {
		background: lightblue;
		border: 10px solid rgba(255,255,255,0.6);
	}

	#div2 {
		background: lightblue;
		border: 10px solid rgba(255,255,255,0.6);
		background-clip: padding-box;
	}

	.demo-d {
		width: 220px;
		height: 120px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -60px;
		margin-left: -110px;
	}

	.demo-wrap {
		width: 100%;
		height: 200px;
		margin-bottom: 50px;
		margin-top: 20px;
	}

	.demo-text {
		width: 310px;
		height: 180px;
		border: 1px solid gray;
		float: right;
		box-sizing: border-box;
		margin-right: 5px;
		padding: 5px 10px;
		font-size: 15px;
	}

	.demo-text p {
		margin-bottom: 1px;
	}
</style>