'use strict';

const menu = document.createElement('div');
const menuBg = document.createElement('div');
const foodMenu = document.createElement('div');
const food1 = document.createElement('div');
const food2 = document.createElement('div');
const food3 = document.createElement('div');
const foodImg1 = document.createElement('img');
const foodImg2 = document.createElement('img');
const foodImg3 = document.createElement('img');
const buyBtn1 = document.createElement('button');
const buyBtn2 = document.createElement('button');
const buyBtn3 = document.createElement('button');
const container = document.querySelector('#content');


foodImg1.src = "../src/images/pizza.png";
foodImg2.src = "../src/images/pizza.png";
foodImg3.src = "../src/images/pizza.png";

container.appendChild(menu)
menu.appendChild(menuBg);
menu.appendChild(foodMenu);
foodMenu.appendChild(food1);
foodMenu.appendChild(food2);
foodMenu.appendChild(food3);
food1.appendChild(foodImg1);
food1.appendChild(buyBtn1);
food2.appendChild(foodImg2);
food2.appendChild(buyBtn2);
food3.appendChild(foodImg3);
food3.appendChild(buyBtn3);

menu.setAttribute('id', 'menu');
menuBg.classList.add('bg-img');
foodMenu.setAttribute('id', 'food-menu');
food1.classList.add('foods');
food2.classList.add('foods');
food3.classList.add('foods');
foodImg1.classList.add('pizza');
foodImg2.classList.add('pizza');
foodImg3.classList.add('pizza');

buyBtn1.textContent = 'Buy Now!';
buyBtn2.textContent = 'Buy Now!';
buyBtn3.textContent = 'Buy Now!';