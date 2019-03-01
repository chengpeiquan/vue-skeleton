<template>
	<div id="app">
		<div>
			<div class="area left">
				<div class="block size-l top">加载完毕！</div>
				<div class="block size-m bottom announcement">加载完毕！</div>
				<div class="headline top">加载完毕！</div>
				<div class="headline middle">加载完毕！</div>
				<div class="headline bottom">加载完毕！</div>
			</div>
			<div class="area right">
				<div class="block size-s top">加载完毕！</div>
				<div class="block size-s middle">加载完毕！</div>
				<div class="block size-s bottom">加载完毕！</div>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
#app
	position absolute
	top 0px
	right 0px
	bottom 0px
	left 0px
	background-color #37495f
	> div
		position absolute
		top 16px
		right 16px
		bottom 16px
		left 16px
.area
	position absolute
	top 0px
	height 100%
	&.left
		left 0px
		width 100% - (98/3)% - 1%
	&.right
		right 0px
		width (98/3)%
	.block
		position absolute
		width 100%
		color #fff
		background-color #41b783
		border-radius 6px
		&.size-s
			height 32%
		&.size-m
			right 0px
			width 47%
			height 32%
		&.size-l
			height 66%
		&.top
			top 0px
		&.middle
			top 34%
		&.bottom
			bottom 0px
	.headline
		position absolute
		right 49%
		left 0px
		height (28% /3)
		color #fff
		background-color #41b783
		border-radius 6px
		&.top
			bottom (@height + 2%)*2
		&.middle
			bottom @height + 2%
		&.bottom
			bottom 0px
	.announcement
		position absolute
		height 24%
</style>