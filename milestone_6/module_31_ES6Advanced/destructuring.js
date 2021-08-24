const fish = {
  id: 43,
  name: "King hilsha",
  price: 9000,
  phone: "8765432345",
  address: "Chadpur",
  dress: "silver",
};

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

//destructuring
const { phone, price, dress, id } = fish;
console.log(phone, dress, price);

const company = {
  name: "GP",
  ceo: { id: 1, name: "ajmol", food: "fuska" },
  web: { work: "web developer", employee: 22, framework: "react" },
};
const work = company.web.work ;
const framework = company.web.framework;

const {work,framework} = company.web;
const {food} = company.ceo;

const {web:{work,framework},ceo:{food}} = company;
console.log(work,framework,food);

