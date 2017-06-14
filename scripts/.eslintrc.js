module.exports = {
  env: {
    node: true
  },
  rules: {
    "no-console": 0,
    "comma-dangle": ["error",
      {
        "objects": "always-multiline",
        "functions": "never",
        "arrays": "never"
      }
    ]
  }
};
