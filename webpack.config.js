module.exports = {
	entry: "./app.jsx",
	output: {
		path: __dirname + "/public/javascripts",
		filename: "app.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel"
			}
		]
	},
	devtool: 'source-map'
};
