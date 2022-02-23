module.exports = {
  extends: "airbnb-typescript-prettier",
  rules: {
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/destructuring-assignment": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "global-require": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react/require-default-props": "off",
    "consistent-return": "off",
    "class-methods-use-this": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/ban-types": "off",
    "no-empty-pattern": "off",
  },

  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
