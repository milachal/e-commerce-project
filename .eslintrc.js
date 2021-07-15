// eslint-disable-next-line
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    ignorePatterns: ['cypress'],
    "rules": {
        "no-underscore-dangle": "off",
        "react/prop-types": "off",
        "no-alert": "off",
        "react/no-unescaped-entities": "off",
        "jsx-a11y/no-onchange": "off",
        "react/jsx-props-no-spreading": "off",
        "consistent-return": "off"
    }
};
