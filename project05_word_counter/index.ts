const input = require('prompt-sync')();



const getInput = ():string => {
    let paragraph: string = "";
    console.log("Enter a paragraph: ")
    paragraph = input()
    return paragraph
}

const getWordCount = (paragraph: string): number => {
    const words: string[] = paragraph.split(" ")
    return words.length
}

const getLetterCount = (paragraph: string): number => {
    const letters: string[] = paragraph.split(" ")
    let letterCount: number = 0
    for (let i = 0; i < letters.length; i++) {
        letterCount += letters[i].length
    }
    return letterCount
    

}

const main = () => {
    const paragraph: string = getInput()
    const wordCount: number = getWordCount(paragraph)
    const letterCount: number = getLetterCount(paragraph)
    console.log(`Word Count: ${wordCount}`)
    console.log(`Letter Count: ${letterCount}`)



}


main()