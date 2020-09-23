"use strict";

const clickTrigger = document.getElementById("colorChange");
clickTrigger.addEventListener("click", function () {
    let headTitle = document.getElementById("headTitle");
    headTitle.classList.add("class", "text-color");
});


const defaultTrigger = document.getElementById("colorDefault");
defaultTrigger.addEventListener("click", function () {
    let headTitle = document.getElementById("headTitle");
    headTitle.classList.remove("class");
});



document.getElementById("inputTrigger").onclick = function () {
    let freewordInput = document.getElementById("freewordInput");
    let freewordInputValue = freewordInput.value;
    console.log(freewordInput);
    console.log(freewordInputValue);
    let showInput = document.getElementById("showInput");
    console.log(showInput);
    showInput.textContent = `入力された値：${freewordInputValue}`;
};
