module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    main: './src/main.ts',
    index: './src/index.ts'
  },
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          // 下から順に処理される
          { loader: "babel-loader" },
          { loader: "ts-loader" }
        ],
        exclude: /node_modules/
      }
    ]
  },
};
