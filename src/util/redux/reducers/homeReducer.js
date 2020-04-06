import { CSV_DATA } from "../../../modules/Home/actions";

const initialState = {
  getCsvData: {},
  uploadedCsv: true
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CSV_DATA:
    return {
        ...state,
        getCsvData: action.payload,uploadedCsv:action.payload.errorStatus
      };
    default:
      return state;
  }
};
