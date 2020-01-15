"use strict";
import gallery from "./gallery-items.js";


const galleryList = document.querySelector("#js-gallery");

const makeList = ({ original, description }) => {
  return `
  <li class = "gallery__item">
    <img src="${original}" alt="${description}" >
  </li>
  `;
};


// const makeImageList = items => items.reduce((list, item) => (list += makeList(item)), "");

// const imageList = makeImageList(images);

// galleryList.innerHTML = imageList;

