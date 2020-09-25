"use strict";
const { check } = require("prettier");

let checkAll = document.getElementById("check-all");

checkAll.addEventListener("click", function () {
    if (checkAll.checked) {
        checkAll.nextSibling.textContent = "すべて外す";
    } else {
        checkAll.nextSibling.textContent = "すべてチェック";
    }
    let checkBoxes = document.getElementsByName("skill");
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = checkAll.checked;
    }
});
