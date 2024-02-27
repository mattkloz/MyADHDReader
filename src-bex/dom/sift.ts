function getRandomInt(max: number, min: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  // Create a random number between the min and max
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function paragraphStyle(p: HTMLParagraphElement) {
  p.style.fontSize = '1.15rem';
  p.style.letterSpacing = '1.3px';
  p.style.lineHeight = '1.75';
  p.style.fontWeight = '200';
  p.style.color = '#434343';
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
    const replaced = `<span class="replaced-str" style="font-weight: 700; color: #000;">${splitWord}</span>`;
    skipCount = skipCount + getRandomInt(6, 2);
    // return the word with the split part replaced
    return word.replace(splitWord, replaced);
  });
  return newWords;
}

export default function siftPage() {
  // only run this code on wikipedia (for now)
  if (window.location.hostname !== 'en.wikipedia.org') return;
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
