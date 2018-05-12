

const card = document.querySelector('.card');
const blurb = document.querySelector('.blurb');

card.addEventListener('mouseover', contentFade);

function contentFade(event) {

  const spectre = document.createAttribute('class');
  spectre.value = 'ghost';
  blurb.setAttributeNode(spectre);

}