console.log("Skript geladen");

let myList = [12, "banana", 1];

let fruits = ["Banana", "Orange", "Apple", "Mango"];

let singleTestVar = "asd";

function containsElement(array, element) {
  return array.includes(element);
}

function initArrays() {
  console.log(containsElement(fruits, "Banana"));
}

initArrays();
