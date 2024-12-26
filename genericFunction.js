//----------------functions that will decide the categories---------------------

const stringLength = (string) => string.length;
const isEven = (number) => number % 2 === 0;

//--------------------------the generic function--------------------------------

const categorise = (fn) => {
  return function (object, value) {
    if (!(fn(value) in object)) {
      object[fn(value)] = [];
    }

    object[fn(value)] = [...object[fn(value)], value];
    return object;
  };
};

const getCategorisedObject = (array, basis) => {
  return array.reduce(categorise(basis), {});
};

//---------------------------------test cases-----------------------------------

console.log(
  getCategorisedObject(["apple", "banana", "mango", "mosambi"], stringLength)
);
console.log(getCategorisedObject([1, 2, 3, 4, 5, 6, 7, 8], isEven));
