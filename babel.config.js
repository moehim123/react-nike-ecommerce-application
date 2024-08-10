module.exports = {
    plugins: [
      ["transform-imports", {
        "framer-motion": {
          "transform": "framer-motion/es/${member}",
          "preventFullImport": true
        }
      }]
    ]
  };