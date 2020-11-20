#!/usr/bin/env node
console.log("vvg-cli is cool");

const vvg = require("@tiveor/vvg");
const { createCanvas } = require("canvas");

const getCommandByIndex = (index) => {
  return process.argv.length > index ? process.argv[index] : "";
};

const random = () => {
  const canvas = createCanvas(1024, 768);

  const x = new vvg(canvas);

  x.example4();
  setTimeout(() => {
    x.saveToFile("random.png");
  }, 5000);
};

const runAction = () => {
  const action = getCommandByIndex(2);

  switch (action) {
    case "random":
      random();
      break;
    default:
      console.log("please include an action to be executed");
  }
};

runAction();
