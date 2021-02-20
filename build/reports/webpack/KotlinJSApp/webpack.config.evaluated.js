{
  mode: 'development',
  resolve: {
    modules: [
      '/home/idv/Java/Projects/KotlinJSApp/build/js/packages/KotlinJSApp/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/home/idv/Java/Projects/KotlinJSApp/build/js/packages/KotlinJSApp/kotlin-dce-dev/KotlinJSApp.js'
    ]
  },
  output: {
    path: '/home/idv/Java/Projects/KotlinJSApp/build/distributions',
    filename: [Function: filename],
    library: 'KotlinJSApp',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    contentBase: [
      '/home/idv/Java/Projects/KotlinJSApp/build/processedResources/js/main'
    ]
  }
}