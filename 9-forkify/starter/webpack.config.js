
const path = require('path');
// gets the htmlweback plugin to be used.
const HtmlWebpackPLugin = require('html-webpack-plugin');

module.exports ={
 entry: ['babel-polyfill','./src/js/index.js'],
 output: {
     path: path.resolve(__dirname,'dist'),
     filename: 'js/bundle.js'
 },
 devServer: {
     contentBase: './dist'
 },
//  plugins behaves like an array.
 plugins: [
     new HtmlWebpackPLugin({
         filename: 'index.html',
         template: './src/index.html'
     })
 ],
 module: {
     rules: [
         { //regular expression tests for anything that
            // ,js
             test:  /\.js$/,
            //  exclude all files in ide modules.
             exclude: /node_modeules/,
             use:{
                //  we can use babel-loader that is in the dev dependencies.
                 loader: 'babel-loader' 
             }
         }
     ]
 }
};