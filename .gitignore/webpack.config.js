const path = require('path'); //node自带path模块
const glob = require('glob-all'); //封装过的glob模块
const Webpack = require('webpack');
const PurifyCSSPlugin = require('purifycss-webpack'); //css抖动
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html插件
/*const CleanWebpackPlugin = require('clean-webpack-plugin'); //清理dist插件*/
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //抽离css插件
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default; //js深度抖动
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //css压缩插件
const proxy = require('http-proxy-middleware');

module.exports = {
    entry: { //入口配置
        index: './src/index.js' //定义入口文件路径，名字为index
    },
node: {
        fs: 'empty'
    },
    output: { //出口配置
        path: path.resolve(__dirname, 'dist'), //定义出口文件路径
        filename: '[name][hash:6].bundle.js' //名字为入口定义的文件名index，同时生成6位哈希值
    },
    mode: 'development', //开发模式
    watch:true,
    module: { //loaders配置
        rules: [{
                test: /\.html$/, //html解析
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src'] //抽离html文件中的图片
                    }
                }
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(eot|woff2?|ttf)$/, //字体文件解析
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts' //设置字体抽离路径
                    }
                }]
            },
            {
                test: /\.(gif|png|jpeg|svg)$/, //图片解析
                use: [{
                    loader: 'url-loader', //根据图片大小选择是否抽离
                    options: {
                        limit: 10000, //设定大于10KB抽离
                        outputPath: 'images' //设置抽离图片的路径
                    }
                }, {
                    loader: 'image-webpack-loader', //图片压缩
                    options: {
                        mozjpeg: { //jpeg格式图片压缩
                            progressive: true,
                            quality: 10 //压缩质量
                        },
                        optipng: { //不使用这个png压缩插件
                            enabled: false,
                        },
                        pngquant: { //png格式图片压缩
                            quality: '65-90', //压缩质量
                            speed: 4
                        },
                        gifsicle: { //gif格式图片压缩
                            interlaced: false,
                        }
                    }
                }]
            },
            {
                test: /\.(js|txs|ts)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env","@babel/preset-react"],

                    }
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            }
        ]
    },
    plugins: [ //插件的配置


        new CleanWebpackPlugin({ //每次打包前清理dist文件夹
            cleanOnceBeforeBuildPatterns: ['**/*', '!mock.json*'], //将mock数据标记为不清理
        }),
        new HtmlWebpackPlugin({ //处理html
            chunks: ['index'],
            filename: 'index.html', //输出的文件名
            template: './public/index.html', //参照的模板
            minify: {
                removeComments: true, //去掉注释
                collapseWhitespace: true, //压缩
                collapseInlineTagWhitespace: true, //去掉行级元素的间隙
                removeAttributeQuotes: true //去掉引号
            }
        }),
        new PurifyCSSPlugin({ //css抖动
            paths: glob.sync([path.join(__dirname, './*.html'), path.join(__dirname, '.src/*.js')]), //将样式同指定定路径的html经进行对比
        }),
        new MiniCssExtractPlugin({ //抽离css
            filename: '[name][hash:6].css',
            chunkFilename: 'index.css'
        }),
        new OptimizeCssAssetsPlugin({ //css压缩
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        new Webpack.ProvidePlugin({ //自动获取依赖
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.$': 'jquery',
            'window.jQuery': 'jquery'
        }),
        new WebpackDeepScopeAnalysisPlugin(), //深度抽离js,必须在css抖动之后
        new Webpack.HotModuleReplacementPlugin() //热更新插件
    ],
    devServer: { //开发服务器配置
        contentBase: path.join(__dirname, "dist"), //本地服务器根目录
        host: '127.0.0.1', //配置服务器IP
        port: 3000, //本地服务器端口号
        compress: true, //启用gzip压缩
        hot: true, //启用热更新
        proxy:{
            '/v2':{
                target:'http://www.xgsxzx.com',
                changeOrigin:true,
            }
        }
    }
}
