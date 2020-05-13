const path = require('path')

module.exports = {
	mode: 'development', // [DEV] abbiamo un po meno di ottimizzazione ma possiamo debuggare meglio
	entry: './src/app.ts', // root entry file del progetto
	output: {
		filename: 'bundle.js', // file finale che verrà creato
		path: path.resolve(__dirname, 'dist'), // usiamo il path assoluto per la cartella 'dist' in cui mettere il bundle
		publicPath: 'dist', // [DEV] per dire durante dev dove è il boundle.js da watch
	},
	devtool: 'inline-source-map', // [DEV] in questo modo dalla console del browser posso ancora vedere i miei file .ts separati e debuggare meglio
	// spieghiamo a webpack cosa fare in base ai file che si trova davanti:
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: '/node_modules/', // diciamo a webpack di non guardare in node_modules
			}, // diciamo a webpack che ogni file .ts deve essere compilato con ts-loader
		],
	},
	// indichiamo a webpack che estensioni hanno i file che importiamo e che devono essere impacchettati tutti insieme
	resolve: {
		extensions: ['.ts', '.js'],
	},
}
