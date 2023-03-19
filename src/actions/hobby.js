export const addNewHobby = (hobby) => {
  return {
    type: "addHobby",
    payload: hobby,
  };
};
export const setNewHobby = (hobby) => {
  return {
    type: "setHobby",
    payload: hobby,
  };
};
