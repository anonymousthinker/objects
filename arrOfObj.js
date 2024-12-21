const keys = ['name', 'age', 'profession'];
const values = [['gour', '19', 'intern'],
['kush', '21', 'footballer'],
['manik', '20', 'hawabaaz']];

//want to create array of objects with all those arrays inside the values array
//like object = [{name: gour, age: 19, profession: intern},
//              {name: kush, age: 21, profession: footballer},
//              {name: manik, age: 20; profession: hawabaaz}]

const get = function () {
  return values.map(function (value) {
    const o = {};
    value.map(function (data, index) {
      o[keys[index]] = data;
    });
    return o;
  });
};

console.log(get());