import { createStore } from "redux";

import { INITIAL_STATE } from "../../services/data";

function burger(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_BURGER":
      return {
        ...state,
        data: [
          ...state.data,
          action.img,
          action.alt,
          action.name,
          action.desc,
          action.price,
          action.button,
        ],
      };
    default:
      return state;
  }
}

const store = createStore(burger);

export default store;
