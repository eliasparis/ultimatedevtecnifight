var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {	
	context: __dirname,
	entry: './client/js/app.jsx',
	output: { path: 'public/js', filename: 'bundle.js'},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node-modules/,
				query: {
					presets: ['react', 'es2015']
				},
				plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([{ from: 'client/**/*.html', to: '../', flatten: true }])
	]
}