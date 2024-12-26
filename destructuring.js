const seperateObj = (obj) => {
  return Object.entries(obj).map((element) => {
    return { [element[0]]: element[1] };
  });
};

const stuff = () => {
  const obj = { name: "gour", age: 20, isDead: true };
  const arr = seperateObj(obj);
  return arr;
};

console.log(stuff());

const recieve = ({ name, ...remaining }) => {
  return [name, remaining];
};

const pass = () => {
  const obj = { name: "gour", age: 20, isDead: true };
  const goal = recieve(obj);

  return goal;
};

console.log(pass());
