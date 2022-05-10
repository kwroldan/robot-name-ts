/* eslint-disable prettier/prettier */
interface IRobot {
    name: string;
    resetName: () => void;
}

export class Robot implements IRobot {
    name: string;
    static usedNames = new Set<string>()
    static releaseNames() {
        this.usedNames.clear();
    }

    constructor() {
        this.name = this.uniqueRandomName;
    }

    resetName() {
        this.name = this.uniqueRandomName;
    }

    private get uniqueRandomName() {
        let newName;
        do {
            newName = this.randomName;
        } while (Robot.usedNames.has(newName));
        Robot.usedNames.add(newName);
        return newName;
    }

    private get randomName() {
        return `${this.twoRandomLetters}${this.randomThreeDigits}`
    }
    private get twoRandomLetters() {
        const letter1 = this.getRandomLetter();
        const letter2 = this.getRandomLetter();
        return `${letter1}${letter2}`
    }
    private getRandomLetter() {
        const letters = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
        const randomNumber = Math.floor(Math.random() * 26);
        return letters[randomNumber];
    }
    private get randomThreeDigits() {
        return `${this.randomNumber0to9}${this.randomNumber0to9}${this.randomNumber0to9}`
    }
    private get randomNumber0to9() {
        return Math.floor(Math.random() * 10);
    }
}
