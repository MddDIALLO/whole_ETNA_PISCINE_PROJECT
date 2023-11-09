import { getInput, getRandomWord, validateInput } from "./lib";

export default function playingWhole() {
    let roundTracker: number = 0;
    let randomWord: string = getRandomWord();
    while(roundTracker < 6) {
        let guessWord: string = '';
        let results: any[] = [];

        if((6 - roundTracker) > 1) {
            console.log(`********** You can try ${6 - roundTracker} times **********`)
        } else {
            console.log(`********** You can try ${6 - roundTracker} time **********`)
        }

        let question: string = 'Please Guess a word of 5 uppercase Characters';

        guessWord = getInput(question);

        while(!validateInput(guessWord)) {
            console.log('You guessed an invalid word');
            guessWord = getInput(question);
        }

        if(guessWord === randomWord) {
            console.log('Congratulations You WIN ! GOO BYE');
            break;
        } else {
            for(let i: number = 0; i < guessWord.length; i++) {
                let foundGood: boolean = false;
                let foundDiff: boolean = false;
                let notFound: boolean = false;

                for(let j: number = 0; j < randomWord.length; j++) {
                    if(guessWord[i] === randomWord[j]) {
                        if(i === j) {
                            if(!foundGood) {
                                results.push({color: '\x1b[033m\x1b[92m', letter: guessWord[i], default: '\x1b[033m\x1b[39m'});
                                foundGood = true;
                            }
                        } else {
                            if(!foundGood && !foundDiff) {
                                results.push({color: '\x1b[033m\x1b[93m', letter: guessWord[i], default: '\x1b[033m\x1b[39m'});
                                foundDiff = true;
                            }
                        }
                    } else {
                        if(!foundGood && !foundDiff && !notFound) {
                            results.push({color: '\x1b[033m\x1b[39m', letter: guessWord[i], default: '\x1b[033m\x1b[39m'});
                            notFound = true;
                        }
                    }
                }
            }
        }

        for (const iterator of results) {
            console.log(iterator.color + iterator.letter + iterator.default);          
        }

        roundTracker++;
    }

    console.log('You failled, let us meet tomorrow for anoter try...');

}