var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {	
	context: __dirname,
	entry: './client/js/app.js',
	output: { path: 'public/js', filename: 'bundle.js'},
	module: {
		loaders: [
			{
				test: /.js?$/,
				loader: 'babel-loader',
				include: '/client/',
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([{from: 'client/index.html', to: '../index.html'}])
	]
}