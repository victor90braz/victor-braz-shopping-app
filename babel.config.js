module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
        modules: "commonjs", // Set the module type to CommonJS
      },
    ],
    "@babel/preset-react",
  ],
  plugins: ["@babel/plugin-transform-modules-commonjs"],
};
