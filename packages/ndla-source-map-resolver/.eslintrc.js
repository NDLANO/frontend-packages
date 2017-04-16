module.exports = {
  env: {
    node: true
  },
  rules: {
    "comma-dangle": ["error",
      {
        "objects": "always-multiline",
        "functions": "never",
        "arrays": "never"
      }
    ]
  }
};
