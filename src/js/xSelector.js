"use strict";
const elems = document.querySelectorAll('.btn_group button');
const xInput = document.querySelector('#x_value');
elems.forEach(element => {
    element.onclick = selectX;
});
function selectX() {
    if (xInput.value === this.value) {
        this.classList.remove('selected');
        xInput.value = "";
    } else {
        let selectedElems = document.querySelectorAll('.selected');
        selectedElems.forEach(element => {
            element.classList.remove('selected');
        });
        xInput.value = this.value;
        this.classList.add('selected');
    }
}