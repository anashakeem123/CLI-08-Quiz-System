#! /usr/bin/env node
///////////////// "The Starting Coding" //////////////////////
// Import necessary modules
import inquirer from "inquirer"; // Importing inquirer for user input
import chalk from "chalk"; // Importing chalk for styling text
import boxen from "boxen"; // Importing boxen for creating a box around text
import chalkAnimation from "chalk-animation"; // Importing chalk-animation for animations
// Display welcome message
console.log(chalk.bgGreen.white.italic.underline(`\n\t\t\t\t\t*Welcome To Quiz System*\n`));
// Function to display a box with animation
async function box() {
    let Animation_box = chalkAnimation.neon(boxen(`Quiz System\nProject 08\nBy\n*Anas Hakeem*`, {
        // Creating a box with title, text, and styling
        title: "My Project",
        titleAlignment: "center",
        textAlignment: "center",
        borderColor: "magenta",
        borderStyle: "doubleSingle",
        backgroundColor: "blue",
        width: 105, // Setting the width of the box
    }));
    await new Promise((resolve) => setTimeout(resolve, 7000)); // Wait for 7 seconds
    Animation_box.stop(); // Stop animation after 7 seconds
}
await box(); // Call the box function
// Main function to run the quiz
async function Project() {
    // Define initial question for starting the quiz or exiting
    const questions = [
        {
            type: "list",
            name: "action",
            message: chalk.bgRed.white.bold.underline("What would you like to do?"), // Prompting user for action
            choices: ["Start Quiz", "Exit"], // Giving options to start quiz or exit
        },
    ];
    // Get initial user input
    const initialAnswer = await inquirer.prompt(questions);
    if (initialAnswer.action === "Start Quiz") {
        // If user chooses to start the quiz
        // Define quiz questions and answers
        const quizQuestions = [
            {
                type: "input",
                name: "UserName",
                message: chalk.bgGreen.white.italic.underline(`What is Your Name :`), // Prompting user for their name
            },
            {
                type: "list",
                name: "capital",
                message: chalk.bgRed.white.italic.underline(`What is the capital of Pakistan ?`),
                choices: ["Karachi", "Islamabad", "Lahore", "Peshawar"],
                answer: "Islamabad",
            },
            {
                type: "list",
                name: "founder",
                message: chalk.bgGreen.white.italic.underline(`Who is the founder of Pakistan ?`),
                choices: [
                    "Allama Iqbal",
                    "Muhammad Ali Jinnah",
                    "Liaquat Ali Khan",
                    "Benazir Bhutto",
                ],
                answer: chalk.bgRed.white.italic.underline("Muhammad Ali Jinnah"),
            },
            {
                type: "list",
                name: "mountain",
                message: chalk.bgGreen.white.italic.underline(`Which mountain range is located in the north of Pakistan ?`),
                choices: ["Himalayas", "Andes", "Alps", "Hindu Kush"],
                answer: "Hindu Kush",
            },
            {
                type: "list",
                name: "flower",
                message: chalk.bgRed.white.italic.underline(`What is the national flower of Pakistan ?`),
                choices: ["Rose", "Lily", "Jasmine", "Sunflower"],
                answer: "Jasmine",
            },
            {
                type: "list",
                name: "river",
                message: chalk.bgGreen.white.italic.underline(`Which river is the longest in Pakistan ?`),
                choices: ["Indus", "Jhelum", "Chenab", "Ravi"],
                answer: "Indus",
            },
            {
                type: "list",
                name: "primeMinister",
                message: chalk.bgRed.white.italic.underline(`Who is the current Prime Minister of Pakistan (as of 2024) ?`),
                choices: [
                    "Imran Khan",
                    "Nawaz Sharif",
                    "Shehbaz Sharif",
                    "Asif Ali Zardari",
                    "Pervez Musharraf",
                ],
                answer: "Shehbaz Sharif",
            },
            // Other quiz questions...
        ];
        // Get answers from user
        const answers = await inquirer.prompt(quizQuestions);
        // Calculate score
        let score = 0;
        for (let i = 1; i < quizQuestions.length; i++) {
            const userAnswer = answers[quizQuestions[i].name];
            if (userAnswer === quizQuestions[i].answer) {
                score++;
            }
        }
        // Display result
        console.log(chalk.bgWhite.red.italic.underline(`\n\t\t\t\t\tHello ${answers.UserName}! You scored ${score} out of ${quizQuestions.length - 1}.\n`));
    }
    else {
        // If user chooses to exit the quiz
        console.log(chalk.bgGreen.white.bold.underline(`\n\t\t\t\t\t"Quiz exited. Goodbye!"\n`));
    }
}
// Call the main function to start the quiz
Project();
//////////////////// "The Ending Coding" ///////////////////////////
