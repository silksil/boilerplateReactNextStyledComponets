const path = require("path");

module.exports = {
  parser: "babel-eslint",
  plugins: ["prettier"],
  extends: ["airbnb", "plugin:prettier/recommended"],
  env: {
    jest: true,
    browser: true
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
        paths: [path.resolve("./packages/"), path.resolve("./sites/")]
      }
    }
  },
  rules: {
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": ["off"],
    "no-trailing-spaces": "off",
    "react/jsx-one-expression-per-line": "off",
    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"]
      }
    ],
    "no-unused-expressions": [
      "error",
      {
        allowTaggedTemplates: true
      }
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ]
  }
};
