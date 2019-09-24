module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    // "parser": "@typescript-eslint/parser",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
        // "@typescript-eslint"
    ],
    "rules": {
      "prettier/prettier": "error",
      "react/js-filename-extension": [
        "warn",
        { extension: [ '.jsx', '.js'] }
      ]
    }
};
