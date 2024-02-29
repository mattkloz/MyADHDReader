import { IStyleOptions } from '../../src/components/models';

let fontSize = '1.15rem';
let letterSpacing = '1.3px';
let lineHeight = '1.75';
let fontWeight = '200';
const color = '#434343';
let readerFontWeight = '700';


// get a random integer between min and max
function getRandomInt(max: number, min: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function paragraphStyle(p: HTMLParagraphElement) {
  p.style.fontSize = fontSize;
  p.style.letterSpacing = letterSpacing
  p.style.lineHeight = lineHeight;
  p.style.fontWeight = fontWeight;
  p.style.color = color;
}

function makeNewWords(words: string[]): string[] {
  // skipCount is a randomized number of words to skip before replacing
  let skipCount = getRandomInt(6, 2);
  const newWords = words.map((word, index) => {
    if (index + 1 < skipCount) return word;
    const wordLength = word.length;
    // determine where to split the word based on its length
    let splitAt = 0;
    if (wordLength < 3) {
      if (wordLength === 1) splitAt = 1;
      splitAt = wordLength - 1;
    } else {
      splitAt = getRandomInt(4, 2);
    }
    const splitWord = word.slice(0, splitAt);
    // create the new word with the split part wrapped in a span to add styling
    const replaced = `<span class="adhd-reader-str" style="font-weight: ${readerFontWeight};">${splitWord}</span>`;
    // update the skipCount to a new random number
    skipCount = skipCount + getRandomInt(6, 2);
    // return the word with the split part replaced
    return word.replace(splitWord, replaced);
  });
  return newWords;
}

export default function applyStyles(data: IStyleOptions) {
  fontSize = `${data.paragraphFontSize}rem`;
  letterSpacing = `${data.paragraphLetterSpacing}px`;
  lineHeight = `${data.paragraphLineHeight}rem`;
  fontWeight = `${data.paragraphFontWeight}`;
  readerFontWeight = `${data.readerFontWeight}`;
  const paragraphs = document.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>;
  paragraphs.forEach((p) => {
    // if the paragraph is too short, skip it
    if (p.innerHTML.length < 10) return;
    paragraphStyle(p);
    const text = p.textContent as string;
    // split the paragraph into an array of words
    const words = text.split(' ');
    const newWords = makeNewWords(words);
    const newHTML = newWords.join(' ');
    p.innerHTML = newHTML;
  });
}
