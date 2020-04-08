const path = require("path");

module.exports = {
  extends: "erb/typescript",
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    "import/no-extraneous-dependencies": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/no-array-index-key": "off",
    "import/prefer-default-export": "off",
    "global-require": "off"
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".tsx", ".ts"],
    "import/resolver": {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve("./configs/webpack.config.eslint.js")
      }
    }
  }
};
