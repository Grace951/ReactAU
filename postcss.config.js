module.exports = {
  plugins: [
		require('autoprefixer')({
		browsers: [
			'last 3 versions',			
			'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
		]
    })
  ]
};
