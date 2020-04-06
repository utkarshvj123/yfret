import {
  CART_TOTAL,
  CART_ARRAY,
  FILTERED_ARRAY_VALUE,MODAL_POP_UP
} from "../../../modules/Dashboard/actions";

const initialState = {
  cartTotal: 0,
  addToCartArray: [],
  filteredArray: [],
  modalPopUp:false
};

export const dashBoard = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED_ARRAY_VALUE:
      return {
        ...state,
        filteredArray: action.payload
      };
    case CART_TOTAL:
      return {
        ...state,
        cartTotal: action.payload
      };
    case CART_ARRAY:
      return {
        ...state,
        addToCartArray: action.payload
      };
    case MODAL_POP_UP:
      return {
        ...state,
        modalPopUp: action.payload
      };
    default:
      return state;
  }
};
