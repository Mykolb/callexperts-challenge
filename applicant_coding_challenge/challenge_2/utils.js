const colorDb = [
  { id: 1, color: "red", primary: true },
  { id: 2, color: "blue", primary: true },
  { id: 3, color: "green", primary: false },
  { id: 4, color: "pink", primary: false },
];

const P = (arg) => new Promise((res) => res(arg));

const push = (color) => {
  colorDb.push(color);
  return color.id;
};

const addToDb = (color) => P(push(color));
const selectWhere = (attr, val) =>
  P(colorDb.filter((color) => color[attr] === val));
const unpredictableApiResponse = () => [true, false][Math.round(Math.random())];

module.exports = {
  addToDb,
  selectWhere,
  colorDb,
  unpredictableApiResponse,
};
