const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');

let quotes =[`"I have the power of God and anime on my side. AAAAAAAAAHHHHHHHHH"
-child on Vine (circa 2015)`,
`“Two bros, chillin’ in a hot tub, 5 feet apart cause they’re not gay.” -Anthony Padilla`,
`“Oh hi, thanks for checking in I’m still a piece of garrbaagge.” -Bill Wurtz`]

let phrase = "Thank you for using quote generator."

let test2 = "test"

let index = Math.floor(Math.random() * 3)

console.log(chalk.magentaBright(quotes[index])+chalk.cyan('\n', phrase, '\n')+chalkAnimation.rainbow(test2))