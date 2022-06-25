/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#abajote , .arriba").innerHTML = generarSimbolo();
  document.querySelector(".numero").innerHTML = generarNumero();
};

let generarNumero = () => {
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numerotes = Math.floor(Math.random() * numeros.length);
  return numeros[numerotes];
};

let generarSimbolo = () => {
  let simbolos = ["♦", "♥", "♠", "♣"];
  let simbolotes = Math.floor(Math.random() * simbolos.length);
  return simbolos[simbolotes];
};
