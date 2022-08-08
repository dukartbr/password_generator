const fs = require("fs");
const chalk = require("chalk");

const savePassword = (password) => {
  fs.appendFile("passwords.txt", password, function (err) {
    if (err) throw err;
    console.log(chalk.green("Password saved to passwords.txt"));
  });
};

module.exports = savePassword;
