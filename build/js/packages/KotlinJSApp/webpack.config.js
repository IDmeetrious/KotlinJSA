let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/home/idv/Java/Projects/KotlinJSApp/build/js/packages/KotlinJSApp/kotlin-dce-dev/KotlinJSApp.js"]
};

config.output = {
    path: "/home/idv/Java/Projects/KotlinJSApp/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "KotlinJSApp.js"
            : "KotlinJSApp-[name].js";
    },
    library: "KotlinJSApp",
    libraryTarget: "umd",
    globalObject: "this"
};

// resolve modules
config.resolve.modules.unshift("/home/idv/Java/Projects/KotlinJSApp/build/js/packages/KotlinJSApp/kotlin-dce-dev")

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';
config.stats = config.stats || {}
Object.assign(config.stats, config.stats, {
    warningsFilter: [/Failed to parse source map/]
})

// dev server
config.devServer = {
  "inline": true,
  "lazy": false,
  "noInfo": true,
  "open": true,
  "overlay": false,
  "contentBase": [
    "/home/idv/Java/Projects/KotlinJSApp/build/processedResources/js/main"
  ]
};

// css settings
;(function(config) {
    ;(function(config) {
       const use = [
           {
               loader: 'css-loader',
               options: {},
           }
       ]
       use.unshift({
           loader: 'style-loader',
           options: {}
       })
       
       config.module.rules.push({
           test: /\.css$/,
           use: use,
           
           
       })

   })(config);
            
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin(tcErrorPlugin))
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/home/idv/Java/Projects/KotlinJSApp/build/reports/webpack/KotlinJSApp/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
