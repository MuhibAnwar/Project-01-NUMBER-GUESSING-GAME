import inquirer from "inquirer";
const random = Math.floor(Math.random() * 7 + 2);
const answers = await inquirer.prompt([{
        name: "userguessednumber",
        type: "number",
        message: "Guess a number"
    }]);
if (answers.userguessednumber === random) {
    console.log("You got it right");
}
else {
    console.log("You got it wrong");
}
