<template>
	<div id="b1">
		<article class="markdown-body">
			<div id="twoBtn">
				<router-link to='/home/b3' class='btn1'>«灵活的背景定位</router-link>	
				<router-link to='/home/b5' class='btn2'>条纹背景»</router-link>	
			</div>
			<h1 id="demo-name">4.边框内圆角</h1>
			<div class="demo-wrap">
				<div id="demo1" class="demo">
					<div id="div1" class="demo-d">
						<div>
							这是一个内部div，<br>
							含有圆角边框
						</div>
					</div>
				</div>
				<div class="demo-text">
					#div1>div {<br>
						padding: 0.8em;<br>
						background: skyblue;<br>
						border-radius: 10px;<br>
					}
				</div>
			</div>
			<div class="demo-wrap">
				<div id="demo2" class="demo">
					<div id="div2" class="demo-d"></div>
				</div>
				<div class="demo-text">
					background: tan;<br>
					border-radius: 10px;<br>
					box-shadow: 0 0 0 10px #655;
				</div>
			</div>
			<div class="demo-wrap">
				<div id="demo3" class="demo">
					<div id="div3" class="demo-d"></div>
				</div>
				<div class="demo-text">
					background: tan;<br>
					border-radius: 10px;<br>
					outline: 10px solid #655;
				</div>
			</div>
			<ul>
				知识点:
				<li>box-shadow</li>
				<li>outline</li>
				<li>border-radius</li>
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
		position: relative;
		padding: 0.8em;
	}

	#div1 div{
/* 		width: 180px;
		height: 80px;
		text-align: center;
		position: absolute;
		top: 10px;
		left: 10px; */
		padding: 0.8em;
		background: skyblue;
		border-radius: 10px;
	}

	#div2 {
		background: tan;
		border-radius: 10px;
		box-shadow: 0 0 0 10px #655;
	}

	#div3 {
		background: tan;
		border-radius: 10px;
		outline: 10px solid #655;
	}
</style>