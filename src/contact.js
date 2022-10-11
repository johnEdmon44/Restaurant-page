const container = document.querySelector('#content');
const contact = document.createElement('div');
const contactBg = document.createElement('div');
const contactBtn = document.createElement('button');

container.appendChild(contact);
contact.appendChild(contactBg);
contactBg.appendChild(contactBtn);

contact.setAttribute('id', 'contact');
contactBg.classList.add('bg-img');

contactBtn.textContent = 'Contact Us';