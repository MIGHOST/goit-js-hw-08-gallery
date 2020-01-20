"use strict";
import gallery from "./gallery-items.js";

const galleryList = document.querySelector(".js-gallery");
const modalWindow = document.querySelector(".js-lightbox");
const closeButton = document.querySelector("button[data-action ='close-lightbox']");
const list = creatElement(gallery);

function creatElement({
    preview,
    original,
    description
}) {
    const galleryItemList = document.createElement("li");
    galleryItemList.classList.add('gallery__item');
    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = original;
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

galleryList.addEventListener("click", e => {
    e.preventDefault()
    modalWindow.classList.add("is-open");
    assignmentAttribute(e.target.dataset.source, e.target.alt);

});

const assignmentAttribute = (src, alt) => {
    const modalImage = document.querySelector(".lightbox__image");
    modalImage.setAttribute("src", src);
    modalImage.setAttribute("alt", alt);

};

const closeModal = () => {
    assignmentAttribute("", "");
    modalWindow.classList.remove("is-open");
}
closeButton.addEventListener("click", closeModal);

window.addEventListener("keydown", e=> {
   
    if(e.key !== "Escape") {
        return;
    } 
    closeModal();
});

