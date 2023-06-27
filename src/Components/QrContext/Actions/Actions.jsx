const Actions = {
  INPUT_TEXTS: "Input_Texts",
};

const InputReducer = (state, action) => {
  switch (action.type) {
    case Actions.INPUT_TEXTS: {
      return {
        ...state,
        [action.FieldName]: action.payload,
      };
    }
    default:
      return state, console.log(action.type);
  }
};

export { Actions, InputReducer };
