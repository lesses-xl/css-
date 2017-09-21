<template>
	<div id="b1">
		<article class="markdown-body">
			<div id="twoBtn">
				<router-link to='/home/b2' class='btn1'>«多重边框</router-link>	
				<router-link to='/home/b4' class='btn2'>边框内圆角»</router-link>	
			</div>
			<h1 id="demo-name">3.灵活的背景定位</h1>
			<div class="demo-wrap">
				<div id="demo1" class="demo">
					<div id="div1" class="demo-d">
						<p>Code pirate</p>
					</div>
				</div>
				<div class="demo-text">
					background: url('http://csssecrets.io/images/code-pirate.svg') no-repeat bottom right #58a;
				</div>
			</div>
			<div class="demo-wrap">
				<div id="demo2" class="demo">
					<div id="div2" class="demo-d">
						<p>Code pirate</p>
					</div>
				</div>
				<div class="demo-text">
					background: url('http://csssecrets.io/images/code-pirate.svg') no-repeat #58a;<br>
					background-position: right 20px bottom 20px;
				</div>
			</div>
			<div class="demo-wrap">
				<div id="demo3" class="demo">
					<div id="div3" class="demo-d">
						<p>Code pirate</p>
					</div>
				</div>
				<div class="demo-text">
					background: url('http://csssecrets.io/images/code-pirate.svg') no-repeat #58a;<br>
					background-position: right 20px bottom 20px;<br>
					background-origin: content-box;
				</div>
			</div>
			<ul>
				知识点:
				<li>background-position</li>
				<li>background-origin</li>
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

	.demo p {
		color: white;
		padding-top: 10px;
		padding-left: 10px;
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
		background: skyblue;
		margin-top: 40px;
		margin-left: 60px;
		box-sizing: border-box;
	}

	#div1 {
		background: url('http://csssecrets.io/images/code-pirate.svg') no-repeat bottom right #58a;
	}

	#div2 {
		background: url('http://csssecrets.io/images/code-pirate.svg') no-repeat #58a;
		background-position: right 20px bottom 20px;
	}

	#div3 {
		background: url('http://csssecrets.io/images/code-pirate.svg') no-repeat #58a;
		background-position: right 20px bottom 20px;
		background-origin: content-box;
	}
</style>