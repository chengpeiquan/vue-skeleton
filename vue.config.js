const path = require("path");
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

function resolve(dir){
	return path.join(__dirname, dir)
}

module.exports = {
	publicPath: "./",
	assetsDir: "static",
	productionSourceMap: false,
	lintOnSave: false,
	chainWebpack: (config)=>{
		config.resolve.alias
			.set("@", resolve("src"))
			.set("@img",resolve("src/assets/img"))
			.set("@styl",resolve("src/assets/styl"))
			.set("@js",resolve("src/assets/js"))
			.set("@lib",resolve("src/assets/js/lib"))
			.set("@cp",resolve("src/components"))
			.set("@views",resolve("src/views"))
			.end()
		config.module
			.rule("images")
				.test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
				.use("url-loader")
					.loader("url-loader")
					.options({
						limit: 10000,
						fallback: {
							loader: "file-loader",
							options: {
								name: "static/img/[name].[hash:8].[ext]"
							}
						}
					})
				.end()
	},
	configureWebpack: (config)=>{
		config.plugins.push(new SkeletonWebpackPlugin({
			webpackConfig: {
				entry: {
					app: path.join(__dirname, './src/Skeleton.js'),
				},
			},
			minimize: true,
			quiet: true,
		}))
	},
	css: {
		extract: true,
		sourceMap: false,
		modules: false
	}
}