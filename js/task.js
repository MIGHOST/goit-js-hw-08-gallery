"use strict";
import gallery from "./gallery-items.js";

const galleryList = document.querySelector(".js-gallery");
const modalWindow = document.querySelector(".js-lightbox");
const closeButton = document.querySelector("button[data-action ='close-lightbox']");

const image = document.querySelector(".lightbox__image");
// let count = 0;
let newUrl;
let newAlt;




const creatElement = ({
    preview,
    original,
    description
}) => {
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
const list = creatElement(gallery);
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
    window.removeEventListener("keydown", changeImg)
}
closeButton.addEventListener("click", closeModal);
window.addEventListener("keydown", e=> {
   
    if(e.key !== "Escape") {
        return;
    } 
    closeModal();
});
const changeImg = (e)=>{
   let count = gallery.findIndex(item=>item.original === newUrl); 
    if(e.code === "ArrowRight"){
        if(count=== galleryList.length -1){
            return
    } else{
        count +=1
    }
}
if (e.code === "ArrowLeft"){
    if(count === galleryList.length +1){
return
    } else {
        count -=1
    }
} 

newUrl = gallery[count].original;
newAlt = gallery[count].description;
assignmentAttribute(newUrl, newAlt)
}

window.addEventListener("keydown", changeImg)
modalWindow.addEventListener("click", e => {
if(e.target === image){
    return
} closeModal()
})

