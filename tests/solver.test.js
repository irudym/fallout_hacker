import { solver, cmpWords } from '../src/utils/solver.js';

describe('Solver tests', () => {

  const dictionary = [
    'test',
    'rest',
    'just',
    'file',
    'lake',
    'door',
    'poor',
    'bear',
    'pile',
    'fire',
    'dire',
    'more',
    'dust',
    'rust',
    'mile',
  ];
  const secretWord = 'file';


  it('guess word "file" in three tries', () => {
    let likeliness = [];
    let word = solver(dictionary, likeliness);
    expect(word).toEqual('more');

    likeliness.push({
      word,
      likeliness: cmpWords(word, secretWord).matches,
    });
    word = solver(dictionary, likeliness);
    expect(word).toEqual('door');

    likeliness.push({
      word,
      likeliness: cmpWords(word, secretWord).matches,
    });
    word = solver(dictionary, likeliness);
    expect(word).toEqual('file');
  });
});
