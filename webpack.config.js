var webpack = require('webpack');
var path = require('path'); //helps to manipulate path names more easily

module.exports = {  // this is where you setup webpacks
    entry: [    //this is where webpacks is going to look for our files at
        'webpack-dev-server/client?http://127.0.0.1:8080/',   //for webpack dev server
        'webpack/hot/only-dev-server',   //for hot reloading which means not having to refresh page
        './src/index.js',  //src is initial file where webpack is looking to load the app (fake dom)
    ],
    output: {  //where webpack would output the files IF we were in production
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'  //bundle is all of the code compiled into one file and this is what is being outputted
    },
    resolve: { // webpack looks for the files to bundle together
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']  //these are the extensions that webpack is going to inspect.
    },
    module: {   //modoles is where we define our loaders
        loaders: [ // load the modules we'll be using: jsx, node_mod, react-hot ...
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',  //modules we install to help load our app
             query: {
                 presets: ['es2015', 'react']
        }
        }
    ]
},
    plugins: [ // add plugins independent of webpack
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()  //means webpack won't compile if there are errors until we fix it
    ]
};
