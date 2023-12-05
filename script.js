console.log("hey world");
const person = {
  name: "Bob",
  age: 30,
  favouriteColour: "red",
};

console.log(person);
console.table(person);
let car = {
  ford: {
    make: "fiesta",
    engine: "300cc",
    colour: "red",
    doors: 4,
    miles: 20050,
  },
  ford1: {
    make: "fiesta",
    engine: "300cc",
    colour: "blue",
    doors: 3,
    miles: 2400,
  },
  ford2: {
    make: "su",
    engine: "250cc",
    colour: "yellow",
    doors: 4,
    miles: 23230,
  },
  peugot: {
    make: "go",
    engine: "300cc",
    colour: "red",
    doors: 4,
    miles: 20050,
  },
  peugot1: {
    make: "epic",
    engine: "350cc",
    colour: "blue",
    doors: 3,
    miles: 2400,
  },
  fiat: {
    make: "mundo",
    engine: "250cc",
    colour: "blue",
    doors: 4,
    miles: 23230,
  },
};
console.table(car);

// let carText = document.querySelector("p");

// let txt = "";
// for (let i in car) {
//   for (let x in car[i]) {
//     txt += car[x] + " ";
//   }
// }
// console.log(txt);
// carText.textContent = txt;

let book = {
  author: "mr smithy",
  title: "unwritten",
  cover: "src = url ('./asset/image",
  isbn: "12341 342",
};
let txt = "";
for (let x in book) {
  txt += book[x] + " ";
}
console.log(txt);

text = document.querySelector("p");
text.textContent = txt;
