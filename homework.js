//1
let product = {
  name: "xiaomi rice cooker",
  price: 1700,
  brand: "xiaomi",
  color: "white",
};
for (let x in product) {
  console.log(x);
}
//x is property
for (let x in product) {
  console.log(x + product[x]);
}
//4
let myDictionary = {
  debug:
    "The process of figuring out why your program has a certain error and how to fix it",
  done:
    "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
  defect: "The formal word for 'error'",
  pm:
    "The short version of Project Manager, the person in charge of the final result of a project",
  "ui/ux":
    "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
};
//4.1
//4.2
let keyword = prompt("enter keyword");
if (keyword in myDictionary) {
  alert(keyword + myDictionary[keyword]);
} else {
  let explanation = prompt("we could not find your word, explain it");
  myDictionary[keyword] = explanation;
  console.log(myDictionary);
}
alert(keyword + myDictionary[keyword]);
//5
let products = [
  {
    name: "xiaomi portable charge",
    price: 428,
    color: "white",
    category: "charge",
  },
  {
    name: "vsmart active 1",
    price: 5487,
    color: "black",
    category: "phone",
  },
  {
    name: "Iphone X",
    price: 21490,
    color: "gray",
    category: "phone",
  },
  {
    name: "Samsung Galaxy A9",
    brand: "Samsung",
    price: 8490,
    color: "Blue",
    category: "Phone",
  },
];
console.log(products);
let position = prompt("enter a position");
for (let i = 0; i < products.length; i++) {}
console.log(products[position]);

//5.3
let cate = prompt("enter a category");
for (let i = 0; i < products.length; i++) {
  if (cate == products[i].category)
    console.log(products[i].name + products[i].price);
}
//5.4
products[0].provider = ["phukienzero", "dientuccc"];
products[1].provider = ["tgdd", "ddghn", "vhstore"];
products[2].provider = ["tgdd"];
products[3].provider = ["tgdd"];
console.log(products);

//6
let tasks = [
  { job: "HTML", complete: false },
  { job: "CSS", complete: false },
  { job: "Basics of JS", complete: false },
  { job: "Node package manager", complete: false },
  { job: "git", complete: false },
];
console.log(tasks);
//6.2
let command = prompt(
  "Enter your command(New,Update,Complete,Delete)"
).toLowerCase();

if (command === "new") {
  let newCommand = prompt("enter new task");
  let b = tasks.push({ job: newCommand, complete: false });
  console.log(tasks);
} else if (command === "update") {
  let newPosition = prompt("enter new position");
  let newThing = prompt("what u wanna update");
  tasks.splice(newPosition - 1, 1, { job: newThing, complete: false });
  console.log(tasks);
} else if (command == "complete") {
  const completePosition = prompt("Enter position to complete").Number;
  tasks[completePosition].complete = true;
  alert(`Task #${completePosition} completed.`);
} else if (command === "delete") {
  let deletePosition = prompt("enter the position you want to delete");
  delete tasks[deletePosition];
  console.log(tasks);
}
//7
const pos = {
  x: 200,
  y: 50,
};
penup();
rt(90);
fd(pos.x);
lt(90);
fd(pos.y);
pendown();
//8
for (let i = 0; i <= 4; i++) {
  fd(20);
  rt(90);
}
