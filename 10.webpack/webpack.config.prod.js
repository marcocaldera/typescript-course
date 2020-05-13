const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: './src/app.ts', // root entry file del progetto
	output: {
		filename: 'bundle.js', // file finale che verrà creato
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: 'none',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: '/node_modules/',
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	plugins: [
		// plugin che prima di far ricompilare a webpack le modifiche
		// publisce la cartella dist
		new CleanPlugin.CleanWebpackPlugin(),
	],
}
