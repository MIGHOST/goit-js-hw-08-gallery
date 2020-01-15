"use strict";
import gallery from "./gallery-items.js";


const galleryList = document.querySelector(".js-gallery");
сonst window = document.querySelector(".js-lightbox");

const makeList = ({ preview, original, description }) => {
  return `
  <li class = "gallery__item">
  <a class = "gallery__link" href = "${original}">
    <img class ="gallery__img" src="${preview}" data-source = "${orginal}" alt="${description}" />
    </a>
  </li>
  `;
};


// const makeImageList = items => items.reduce((list, item) => (list += makeList(item)), "");

// const imageList = makeImageList(images);

// galleryList.innerHTML = imageList;

