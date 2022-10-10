'use strict';

const container = document.querySelector('#content');
const home = document.createElement('div');
const homeTxt = document.createElement('div');
const homeImg = document.createElement('div');
const text1 = document.createElement('p');
const text2 = document.createElement('p');
const text3 = document.createElement('p');
const homeBtns = document.createElement('div');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');

container.appendChild(home);
home.appendChild(homeImg);
homeImg.appendChild(homeTxt);
homeTxt.appendChild(text1);
homeTxt.appendChild(text2);
homeTxt.appendChild(text3);
homeTxt.appendChild(homeBtns);
homeBtns.appendChild(btn1);
homeBtns.appendChild(btn2);

home.setAttribute('id', 'home');
homeImg.setAttribute('id', 'bg-home-img');
homeTxt.setAttribute('id', 'home-txt');
homeBtns.setAttribute('id', 'home-btns');

text1.textContent = 'Delicious!';
text2.textContent = 'ITALIAN PIZZA';
text3.textContent = 'A small river named Duden flows by their place and supplies \n it with necessary regelialia';

btn1.textContent = 'Order now!';
btn2.textContent = 'Menu';