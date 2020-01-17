"use strict";
import gallery from "./gallery-items.js";

const galleryList = document.querySelector(".js-gallery");
const modalWindow = document.querySelector(".js-lightbox")
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

galleryList.append(...makeImageList);

const assignmentAttribute = (item, src, alt) => {
    const modalImage = document.querySelector("lightbox__image");

    modalImage.getAttribute("src", src);
    modalImage.getAttribute("alt", alt);
}

const clickList = event => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
        return
    }
}
const imgUrl = event.target.dataset.source;
const imgAlt = event.target.getAttribute("alt");

assignmentAttribute(modalWindow, imgUrl, imgAlt);
modalWindow.classList.add("is-open")




