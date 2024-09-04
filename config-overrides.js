// config-overrides.js
const { addWebpackAlias } = require("customize-cra");
const path = require("path"); // Import the 'path' module

module.exports = function override(config, env) {
  config = addWebpackAlias({
    "@src": path.resolve(__dirname, "src"),
    "@data": path.resolve(__dirname, "src/_data"),

    "@assets": path.resolve(__dirname, "src/assets"),
    "@images": path.resolve(__dirname, "src/assets/images"),

    "@components": path.resolve(__dirname, "src/components"),
    "@contexts": path.resolve(__dirname, "src/contexts"),

    "@layouts": path.resolve(__dirname, "src/layouts"),
    "@web_routing": path.resolve(__dirname, "src/web_routing"),

    "@pages": path.resolve(__dirname, "src/pages"),
    // Add more aliases as needed
  })(config);

  return config;
};
