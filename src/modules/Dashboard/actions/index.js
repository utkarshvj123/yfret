export const CART_TOTAL = "CART_TOTAL";
export const CART_ARRAY = "CART_ARRAY";
export const FILTERED_ARRAY_VALUE="FILTERED_ARRAY_VALUE";
export const MODAL_POP_UP="MODAL_POP_UP";

export function addToCartTotal(value) {
  return dispatch => {
    dispatch({
      type: CART_TOTAL,
      payload: value
    });
  };
}

export function addedToCartArray(value) {
  if (value === undefined) {
    value = [];
  }
  return dispatch => {
    dispatch({
      type: CART_ARRAY,
      payload: value
    });
    dispatch(addToCartTotal(value.length));
  };
}

export function filteredArray(value) {
  return dispatch => {
    dispatch({
      type: FILTERED_ARRAY_VALUE,
      payload: value
    });
  };
}


//-----Modal popup-------//
export function modalPopUp(value) {
  return dispatch => {
    dispatch({
      type: MODAL_POP_UP,
      payload: value
    });
  };
}