"use strict";
import gallery from "./gallery-items.js";


const list = creatElement(gallery);

function creatElement ({preview, original, description}) {
    const galleryItemList = document.createElement("li");
    galleryItemList.classList.add('gallery__item');
    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = "";
    const galleryImg = document.createElement("img");
    galleryImg.classList.add('gallery__image');
    galleryImg.src = preview;
    galleryImg.alt = description;
    galleryImg.dataset.source = original;
    galleryItemList.appendChild(galleryLink);
    galleryLink.appendChild(galleryImg);   
    return galleryItemList;     
}

const makeImageList = gallery.map((item) => creatElement(item));

console.log(makeImageList)
const galleryList = document.querySelector(".js-gallery");
galleryList.append(...makeImageList);

const a =1; 
