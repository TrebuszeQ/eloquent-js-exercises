import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output, exit} from 'node:process';
function main()
{
    do {
        console.log("Application is based on exercise chapter associated with regular expressions.");
        console.log("Chapter 9, page 194.");
        console.log("There are 7 options for a particular task given. Each option returns result of a regular expression for the given task.");
        console.log(`0. Exit`);
        console.log(`1. Regexp matching "car" and "cat" words.`);
        console.log(`2. Regexp matching "pop" and "prop" words.`);
        console.log(`3. Regexp matching "ferret", "ferry" and "ferrari" words.`);
        console.log(`4. Regexp matching any english word finishing with "ious".`);
        console.log(`5. Regexp matching whitespace after which there is . or , or : or ;`);
        console.log(`6. Regexp matching word longer than 6 letters.`);
        console.log(`7. Regexp matching word without "e" or "E" character.`);
        console.log(`8. Regexp replacing all apostrophes (except around 'aren't' word) with double quotes.`);
        console.log(`9. Regexp matching JavaScript style numbers, accepting -, +, characters in scientific notation e-, E between numbers, . before and after number.\n\n`);


        let option = checkInput();
        console.log(option);
        switch(option) {

            case 0:
                exit(1);
                return;

            default:
                console.log("Wrong input.");
                break;
        }
    } while (true);
}

async function checkInput()
{
    try {
        let option = collectInput();
        console.log(option);
        Number.parseInt(option);
    }
    catch (e) {
        console.log(e.message);
    }
    return option;
}
function collectInput() {

    const rl = readline.createInterface({ input, output });
    const option = rl.question("Enter correct option.").then(value => {
        console.log(value);
    });
    rl.close();

    return option;
}

main();