import React, { PropTypes } from 'react';
import DeleteButton from './delete_button';
import { numFormat } from '../utils/format';

const Dictionary = ({ dictionary, usedWords, onDelete }) => (
  <ul className="list-group">
    {dictionary.map((word, i) => <li
      className={usedWords.indexOf(word) > -1 ?
      'terminal-list-selected'
      :
      'terminal-list'}
      key={i}>
      <DeleteButton onClick={() => (onDelete(i))} />
      {numFormat(i, 4) + ' '}
      {word}
    </li>
    )}
  </ul>
);

Dictionary.propTypes = {
  dictionary: PropTypes.arrayOf(PropTypes.string),
  usedWords: PropTypes.arrayOf(PropTypes.string),
};

Dictionary.defaultProps = {
  dictionary: [],
  usedWords: [],
};

export default Dictionary;
