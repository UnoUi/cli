#! /usr/bin/env node
const readline = require('readline');
const shell = require("shelljs")

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

const rl = readline.createInterface(
  process.stdin, process.stdout);

console.log()
console.log("\u001b[1;34m UnoUI cli \u001b[1;0m")
rl.question(' Project title? ', (input) => {
  try {
    if (input) {
      console.log()
      shell.exec(`git clone https://github.com/getshcc/unoui-starter ${input}`)
      shell.exec(`cd ${input}; rm -rf .git; cd ..`)
      console.log()
      console.log(`\u001b[1;34m cd ${input} \x1b[0m`);
      console.log("\u001b[1;34m npm install \x1b[0m or \u001b[1;34m pnpm install \x1b[0m");
      console.log("\u001b[1;34m npm run dev \x1b[0m");
      console.log()
    } else {
      console.log()
      shell.exec(`git clone https://github.com/getshcc/unoui-starter unoui`)
      shell.exec(`cd unoui; rm -rf .git; cd ..`)
      console.log()
      console.log("\u001b[1;34m cd unoui \x1b[0m");
      console.log("\u001b[1;34m npm install \x1b[0m or \u001b[1;34m pnpm install \x1b[0m");
      console.log("\u001b[1;34m npm run dev \x1b[0m");
      console.log()
    }
  } catch (error) {
    console.log(error)
  }
  rl.close();
});