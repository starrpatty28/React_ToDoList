var webpack = require ('webpack');
var path = require ('path');

module.exports = {    //setting up webpack
    devtool: 'inline-source-map',  //gives inline numbers incase of errors
    entry: [    //this is where webpack will look for your files
        'webpack-dev-server/client?http://127.8.0.1:8080/', //setup for hot reloading and live reloading
        'webpack/hot/only-dev-server',
        './src', //folder where webpack looks for initial pack to run
    ],
    output: {
        path: path.join(_dirname, 'public'), //this is where webpack would output our files if we were working in production
        filename: 'bundle.js' //bundle all your code into one-file
    },
    resolve: { //where webpack will look for the files to bundle together
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js'] //extentsions that webpack will expect
    }
    module: {   //where we define our loaders
        loaders: [
        {
            test: /\.jsx?$/, //for using jsx files
            exclude: /node_module/,
            loader: ['react-hot', 'babel?presets[]=react, presets[]=es2015']  //modules you install to help load your app
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //hot reloading and live reloading
        new webpack.NoErrorsPlugin()  //webpack will not run if there are any errors

    ]
};
