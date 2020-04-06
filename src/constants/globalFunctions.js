export const findFromArray = (array, findValue) => {
  const newCategories = [];
  const newArray = [];
  array.filter((obj) => {
    if (obj[findValue]) {
      newCategories.push(obj[findValue]);
      newArray.push(obj);
    }
  });

  return { newArray, newCategories: repetedRemoval(newCategories) };
};

const repetedRemoval = (array) => {
  return fillingValueLable([...new Set(array)]);
};

const fillingValueLable = (array) => {
  const newArra = [];
  array.map((val) => {
    let newStr = val.replace(/-/g, " ");
    newArra.push({
      ["label"]: newStr.charAt(0).toUpperCase() + newStr.slice(1),
      ["value"]: val,
    });
  });
  return newArra;
};

export const getCompleteArray = (completArray, value, filterBy) => {
  let newArray = [];
  completArray.filter((obj) => {
    if (obj[filterBy] === value) {
      newArray.push(obj);
    }
  });
  return newArray;
};
