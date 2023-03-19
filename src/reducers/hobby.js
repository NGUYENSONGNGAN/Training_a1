const initialValue = { list: [], activeId: null };
const hobbyReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "addHobby": {
      const newlist = [...state.list];
      newlist.push(action.payload);
      return {
        ...state,
        list: newlist,
      };
    }
    case "setHobby": {
      return state;
    }
    default:
      return state;
  }
};
export default hobbyReducer;
