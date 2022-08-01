module.exports = {
  "*.js": ["eslint --fix", "prettier -cw"],
  "*.ts": ["eslint --fix", "prettier -cw"],
  "*.css": ["stylelint --fix"],
};
