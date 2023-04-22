import {portfolio} from './portfolio.js';
import {about} from './about.js';
import { pet } from './pet-projects.js';

export const menu = document.createElement('div');
menu.id = 'menu';

export const conteiner = document.createElement('div');
conteiner.id = 'conteiner';

const portfolioButton = document.createElement('button');
portfolioButton.id = 'portfolioButton';
portfolioButton.type = 'button';
portfolioButton.innerHTML = 'Portfolio';
portfolioButton.addEventListener('click', () => {
    clearButtonBg();
    portfolioButton.style.background = 'aquamarine'; 
    conteiner.innerHTML = '';
    conteiner.append(portfolio)
    
});

menu.append(portfolioButton);

const aboutButton = document.createElement('button');
aboutButton.id = 'aboutButton'
aboutButton.type = 'button';
aboutButton.innerHTML = 'About';
aboutButton.addEventListener('click', () => { 
    clearButtonBg();
    aboutButton.style.background = 'aquamarine';
    conteiner.innerHTML = '';
    conteiner.append(about)
});
menu.append(aboutButton);

const petButton = document.createElement('button');
petButton.id = 'petButton';
petButton.type = 'button';
petButton.innerHTML = 'Pet Project';
petButton.addEventListener('click', () => { 
    clearButtonBg();
    petButton.style.background = 'aquamarine';
    conteiner.innerHTML = '';
    conteiner.append(pet)
});

function clearButtonBg () {
    portfolioButton.style.background = 'none';
    aboutButton.style.background = 'none';
    petButton.style.background = 'none';
}

menu.append(petButton);