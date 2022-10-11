import _ from 'lodash';
import './css/home.css';
import './images/pizzabg.jpg';
import './home';
import './menu';
import './css/menu.css';
import './css/contact.css';
import './contact';
'use strict';

const homeBtn = document.querySelector('#nav-home');
const menuBtn = document.querySelector('#nav-menu');
const contactBtn = document.querySelector('#nav-contact');

homeBtn.addEventListener('click', () => {
  home.style = 'visibility: visible';
  menu.style = 'visibility: hidden';
  contact.style = 'visibility: hidden';
});

menuBtn.addEventListener('click', () => {
  home.style = 'visibility: hidden';
  menu.style = 'visibility: visible';
  contact.style = 'visibility: hidden';
});

contactBtn.addEventListener('click', () => {
  home.style = 'visibility: hidden';
  menu.style = 'visibility: hidden';
  contact.style = 'visibility: visible';
});