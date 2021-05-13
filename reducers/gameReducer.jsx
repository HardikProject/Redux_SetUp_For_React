const initialState = {
  popular: [],
  lastYear: [],
  nextYear: [],
  search: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FATCH_DATA':
      return {...state};

    default:
      return {...state};
  }
};

export default gameReducer;
