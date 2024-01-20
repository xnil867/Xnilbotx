const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF7F50")('[ ❕ WARNING] » ')  + data );
			break;
		case "error":
			console.log(chalk.bold.hex("#FF0000")('[ ❗ ERROR ] » ') + data );
			break;
		default:
			console.log(chalk.bold.hex("#FF4500")(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF0000")('[ SHAON - AHMED ➥] ') +data + chalk.bold.hex("FFF0000")("\n✦────────────────────────────────────────✦" ));
			break;
		case "error":
			console.log(chalk.bold.hex("#FFFF00")('[♧ SHAON-PROJECT ♧  ]') + data + chalk.bold.hex("1000FF")("\n✦────────────────────────────────────────✦" ));
			break;
		default:
			console.log(chalk.bold.hex("#00FFFF")('[☾︎☛ SHAON ☚☽︎]  ') + data + chalk.bold.hex("FF00E7")("\n✦────────────────────────────────────────✦" ));
			break;
	}
}