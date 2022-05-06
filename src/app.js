/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = excuseGenerator();
  });
};

let excuseGenerator = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIdex = Math.floor(Math.random() * who.length);
  let actionIdex = Math.floor(Math.random() * action.length);
  let whatIdex = Math.floor(Math.random() * what.length);
  let whenIdex = Math.floor(Math.random() * when.length);

  return (
    who[whoIdex] +
    " " +
    action[actionIdex] +
    " " +
    what[whatIdex] +
    " " +
    when[whenIdex]
  );
};
