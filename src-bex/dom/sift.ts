function getRandomInt(max: number, min: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export default function siftPage() {
  if (window.location.hostname !== 'en.wikipedia.org') return;
  const paragraphs = document.querySelectorAll('p') as NodeListOf<HTMLParagraphElement>;
  paragraphs.forEach((p) => {
    if (p.innerHTML.length < 10) return;
    p.style.fontSize = '1.15rem';
    p.style.letterSpacing = '1.3px';
    p.style.lineHeight = '1.75';
    p.style.fontWeight = '200';
    p.style.color = '#434343';
    const text = p.textContent as string;
    const words = text.split(' ');
    let thisCount = getRandomInt(6, 2);

    const newWords = words.map((word, index) => {
      if (index + 1 < thisCount) return word;
      const wordLength = word.length;
      let splitAt = 0;
      if (wordLength < 3) {
        if (wordLength === 1) splitAt = 1;
        splitAt = wordLength - 1;
      } else {
        splitAt = getRandomInt(4, 2);
      }
      const splitWord = word.slice(0, splitAt);
      const replaced = `<span class="replaced-str" style="font-weight: 700; color: #000;">${splitWord}</span>`;
      thisCount = thisCount + getRandomInt(6, 2);
      return word.replace(splitWord, replaced);
    });
    const newHTML = newWords.join(' ');
    p.innerHTML = newHTML;

    //   if (word.includes('<span class="replaced-str" style="font-weight: 700">')) return;
    //   if (word.includes('<') && word.includes('>')) {
    //     const find1 = [...word.matchAll(/</g)];
    //     const justValues = find1.map((match) => match.index) as number[];
    //     const highest1 = Math.max(...justValues);
    //     const find2 = [...word.matchAll(/>/g)];
    //     const justValues2 = find2.map((match) => match.index) as number[];
    //     const highest2 = Math.max(...justValues2);
    //     if (highest1 > highest2) {
    //       hasOpenTag = true;
    //       return;
    //     } else {
    //       hasOpenTag = false;
    //       return;
    //     }
    //   }
    //   if (word.includes('<')) {
    //     hasOpenTag = true;
    //     return;
    //   }

    //   if (word.includes('>')) {
    //     hasOpenTag = false;
    //     return;
    //   }
    //   if (hasOpenTag) {
    //     return;
    //   }
    //   if (word.includes('href') || word.includes('title=') || word.includes('id')) {
    //     return;
    //   }
    //   if (sinceLastIndex < thisCount) {
    //     sinceLastIndex++;
    //     return;
    //   } else if (sinceLastIndex === thisCount) {

    //     const wordLength = word.length;
    //     let splitAt = 0;
    //     if (wordLength < 3) {
    //       if (wordLength === 1) splitAt = 1;
    //       splitAt = wordLength - 1;
    //     } else {
    //       splitAt = getRandomInt(4, 1);
    //     }
    //     const splitWord = word.slice(0, splitAt);
    //     // console.log(JSON.parse(JSON.stringify(splitWord)));
    //     // console.log(JSON.parse(JSON.stringify(word)));
    //     // console.log(JSON.parse(JSON.stringify(index)));
    //     const newWord = `<span class="replaced-str" style="font-weight: 700">${splitWord}</span>`;
    //     const combWord = word.replace(splitWord, newWord);
    //     p.innerHTML = p.innerHTML.replace(word, combWord);
    //     // console.log(p.innerHTML);
    //     sinceLastIndex = 1;
    //     const genCount = getRandomInt(6, 3);
    //     thisCount = genCount;
    //     return;
    //   }
    // });
  }

  );
}
