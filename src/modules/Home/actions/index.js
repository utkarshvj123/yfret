export const CSV_DATA = "CSV_DATA";
export const ACTIVE_CLASS_DATA = "ACTIVE_CLASS_DATA";

export function getCsvData(value) {
  return dispatch => {
    dispatch({
      type: CSV_DATA,
      payload: value
    });
  };
}