
/**
 * Compare two words
 * @param  {string} w1 - the first word
 * @param  {string} w2 - the second word
 * @return {object}    - return amount of matched letters and matching mask
 */
export const cmpWords = (w1, w2) => {
  const length = w1.length;
  let matches = 0;
  let mask = [];
  for (let i = 0; i < length; i++)
    if (w1.charAt(i) === w2.charAt(i)) {
      matches++;
      mask[i] = 1;
    } else mask[i] = 0;

  return {
    matches,
    mask,
  };
};

/**
 * Check if the array contains the provided word
 * @param  {array} array array of words
 * @param  {string} word  a word to check
 * @return {boolean}       true if the provided array contains the word, false otherwise
 */
const containsTheWord = (array, word) => (
  array.reduce((acc, val) => {
    if (word === val.word) acc = true;
    return acc;
  }, false));


/**
 * Find a word which mostly similar to other words in the array
 * @param  {Array of String} dictionary array with words
 * @return {String}            a word
 */
const mostSimilarWord = (dictionary) => {
  return dictionary.reduce((acc, word) => {
    let wl = {word, likeliness: 0};
    dictionary.map((item) => {
      const matches = cmpWords(item, word).matches;
      if (word !== item && matches > 0) wl.likeliness += 1;
    });
    // console.log("WL: ", wl);
    if (wl.likeliness >= acc.likeliness) acc = wl;
    return acc;
  }, { word: '', likeliness: -1 }).word;
};

const lessSimilarWord = (dictionary) => {
  return dictionary.reduce((acc, word) => {
    let wl = { word, likeliness: 0 };
    dictionary.map((item) => {
      const matches = cmpWords(item, word).matches;
      if (word !== item && matches > 0) wl.likeliness += 1;
    });
    // console.log("WL: ", wl);
    if (wl.likeliness < acc.likeliness) acc = wl;
    return acc;
  }, { word: '', likeliness: dictionary.length+1 }).word;
}

export const solver = (dictionary, likeliness) => {
  // if likeliness array is empty, choose a word which is has as much as posible
  // similarities with other words
  if (likeliness.length === 0) return mostSimilarWord(dictionary);

  const workingDic = dictionary.filter((word) => {
    let match = true;
    if (containsTheWord(likeliness, word)) {
      match = false;
    } else {
      likeliness.map((val) => {
        if (val.likeliness === 0 && cmpWords(word, val.word).matches !== 0) {
          match = false;
        }
        // remove if the word doesn't have any similarities with the words
        // in the likeliness array
        if (val.likeliness !== cmpWords(word, val.word).matches) match = false;
      });
    }

    return match;
  });

  if (workingDic.length === 0) return workingDic[0];
  return lessSimilarWord(workingDic);
};
