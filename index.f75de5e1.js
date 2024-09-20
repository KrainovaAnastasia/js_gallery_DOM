"use strict";
const largeImg = document.getElementById("largeImg");
const thumbs = document.getElementById("thumbs");
thumbs.addEventListener("click", (evt)=>{
    evt.preventDefault();
    let target = evt.target;
    if (target.tagName === "IMG") target = target.parentElement;
    if (target.tagName === "A") {
        const newSrc = new URL(target.getAttribute("href"), window.location.origin);
        largeImg.src = newSrc.href;
    }
});

//# sourceMappingURL=index.f75de5e1.js.map
