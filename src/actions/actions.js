const ADD_WORD = 'ADD_WORD';
const DELETE_WORD = 'DELETE_WORD';
const ADD_LIKELINESS = 'ADD_LIKELINESS';
const UPDATE_LIKELINESS = 'UPDATE_LIKELINESS';
const CLEAR_LIKELINESS = 'CLEAR_LIKELINESS';

export const addWord = (word) => (
  {
    type: ADD_WORD,
    word,
  }
);

export const deleteWord = (index) => (
  {
    type: DELETE_WORD,
    index,
  }
);

export const updateLikeliness = (index, likeliness ) => (
  {
    type: UPDATE_LIKELINESS,
    value: {
      index,
      likeliness,
    },
  }
);

export const addLikeliness = (word) => (
  {
    type: ADD_LIKELINESS,
    value: {
      word,
      likeliness: 0,
    },
  }
);

export const clearLikeliness = () => (
  {
    type: CLEAR_LIKELINESS,
  }
);


/**
 * [ACTION_HANDLER set corresponding reducers for actions]
 * @type {Object}
 */
const ACTION_HANDLER = {
  [ADD_WORD]: (state, action) => (
    {
      ...state,
      dictionary: [
        ...state.dictionary,
        action.word,
      ],
    }
  ),
  [DELETE_WORD]: (state, action) => (
    {
      ...state,
      dictionary: state.dictionary.filter((val, i) => (i !== action.index)),
    }
  ),
  [ADD_LIKELINESS]: (state, action) => (
    {
      ...state,
      likeliness: [
        ...state.likeliness,
        {
          word: action.value.word,
          likeliness: action.value.likeliness,
        },
      ],
    }
  ),
  [UPDATE_LIKELINESS]: (state, action) => {
    let newLikeliness = state.likeliness.slice(0);
    newLikeliness[action.value.index].likeliness = action.value.likeliness;
    return {
      ...state,
      likeliness: newLikeliness,
    };
  },
  [CLEAR_LIKELINESS]: (state, action) => (
    {
      ...state,
      likeliness: [],
    }
  ),
};


const initialState = {
  dictionary: [],
  likeliness: [],
};

export const wordReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLER[action.type];

  return handler ? handler(state, action) : state;
};
