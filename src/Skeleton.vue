<template>
	<div class="skeleton">
		<div>
			<div class="area left">
				<div class="block size-l top"></div>
				<div class="block size-m bottom announcement"></div>
				<div class="headline top"></div>
				<div class="headline middle"></div>
				<div class="headline bottom"></div>
			</div>
			<div class="area right">
				<div class="block size-s top"></div>
				<div class="block size-s middle"></div>
				<div class="block size-s bottom"></div>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
.skeleton
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